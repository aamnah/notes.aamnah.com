---
title: .NET Core SignalR with React Native
date: 2019-10-16
lastmod: 2019-11-27

---

```bash
#yarn add @aspnet/signalr

npm i @aspnet/signalr
```

Working code example

```jsx
// App.tsx
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SignalR from '@aspnet/signalr'


export default function App() {
  const [connectionState, setConnectionState] = useState(false)
  const [connectionError, setConnectionError] = useState()
  useEffect(() => {
    signalr()
  }, []) // passing an empty array makes sure this only runs on mount/unmount and not everytime props/state changes. if you give it something inside the array it'll only update when that something updates

  function signalr() {
    // das function to start a connection with SignalR hub for our app
    const token = "mySuperSecretToken"
    const connection = new SignalR.HubConnectionBuilder()
      .withUrl('https://api.mysite.com/signalhub', {
        accessTokenFactory: () => token
      })
      .configureLogging(SignalR.LogLevel.Debug)
      .build()
  
    async function start() {
      try {
        await connection.start()
        setConnectionState(true)
        
        setInterval(() => {
          connection.invoke('heartbeat')
          console.log(`beat`)
        }, 15000) // Send heartbeat every 15 secs.
        setConnectionError('')
        console.log('CONNECT ho gya!')
      } catch (error) {
        console.error(`Disconnected with status code ${error.statusCode}`, JSON.stringify(error))
        setConnectionError(JSON.stringify(error))
        setTimeout(() => start(), 5000) // Retry connection after 5secs 
      }
    }
  
    // connection.serverTimeoutInMilliseconds = 3600000
    // connection.keepAliveIntervalInMilliseconds = 10000
    start()
  
    // Reconnect
    connection.onclose(async (error) => {
      setConnectionState(false)
      setConnectionError(JSON.stringify(error))
      console.log('awwww =( chala gya')
      console.error(`Disconnected with status code ${error.statusCode}`, JSON.stringify(error))
      await start()
    })
  }

  
  return (
    <View style={styles.container}>
      <Text>
        You are <Text style={styles.boldText}>{connectionState ? <Text style={styles.greenText}>connected</Text> : <Text style={styles.redText}>disconnected</Text>}</Text>
        <Text>{connectionError ? connectionError : null }</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontWeight: 'bold'
  },
  greenText: {
    color: '#2ECC71',
  },
  redText: {
    color: '#E74C3C'
  }
});
```

Notes
---

- You need to `invoke` something at regular intervals in order to stay connnected. Otherwise it'll timeout the connection every 30/60 secs..
- Doesn't matter if the method you're invoking exists. If it doesn't, you'll get a `HubException` error about method not existing, but you'll stay connected nonetheless.
- i have tried setting the `keepAliveIntervalInMilliseconds` and `serverTimeoutInMilliseconds` values on the frontend but that didn't work
- The `{ accessTokenFactory: () => token }` bit alllows you to pass a token for authorization.
- There are different `LogLevel`s. `Debug` will give you more details
