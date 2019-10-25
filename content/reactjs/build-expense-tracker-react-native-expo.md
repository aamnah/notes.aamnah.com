---
title: Building an app with React Native and Expo
date: 2019-10-03
status: draft
---

# Day 1

```bash
npm i -g expo-cli
expo init expense-tracker
cd expense-tracker
expo start
```

```
http://localhost:19002/
```

Install the Expo Client on your phone and scan the QR cocde to get a live preview.

### React Native Components

- `<View>` is like `<div>` or `<span>`
- `<Text>` is for displaying text, like `p`, `<h1>` or `<small`

### React Native and `styled-components`

You just use React Native components like `View` and `Text` instead of `h1` and `div`. And you no longer to import native components from `react-native` anymore.

```jsx
import React from 'react'
import styled from 'styled-components'

export default function App() {
  return (
    <ViewContainer>
      <Greeting>Nice!</Greeting>
    </ViewContainer>
  )
}

const ViewContainer = styled.View`
  flex: 1;
  background-color: salmon;
  align-items: center;
  justify-content: center;
`
const Greeting = styled.Text`
  font-weight: bold;
  font-size: 20;
  color: white;
`
```

To use `styled-components` with third-party libraries, one that don't use React Native components, you use `styled()`

```jsx
import styled from 'styled-components'
import PieChart from 'react-native-svg-charts'

const StyledPieChart = styled(PieChart)`
  height: 400;
`
```

#### Unitless Numbers

- You can't use `em` or `rem` with font size. Font size is specified as just a number value, without mentioning the unit.
- All values are unitless. For example: `height`, `margin`, `padding`, `width`, `border-width`, `radius` etc.

```jsx
<Text style={{fontSize: 20}}>{this.props.children}</Text>
```

**BUT** if you use `styled-components`, you have to specify units.

# Day 2

### Navigation

```bash
yarn add react-navigation
expo install react-native-gesture-handler react-native-reanimated
```

  - Stack
  - Tab
  - Drawer
  - Custom

Takes:
  
  - Route configuration object (required)
  - Options object (optional): `navigationOptions`


#### Icons in Tab navigation

You can set the `tabBarIcon` in `navigationOptions` for individual screens. You also have the option for setting a default icon in `defaultNavigationOptions`

```jsx
import { createAppContainer } from 'react-navigation' // this wraps the navigator
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { AntDesign } from '@expo/vector-icons'

import Home from './screens/Home'
import Details from './screens/Details'
import Settings from './screens/Settings'

const TabNavigator = createAppContainer(
  createBottomTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          tabBarIcon: () => <AntDesign name="bars" size={24} color="black" />
        }
      },
      Details: {
        screen: Details,
        navigationOptions: {
          tabBarIcon: () => <AntDesign name="piechart" size={24} color="black" />
        }
      },
      Settings: {
        screen: Settings,
        navigationOptions: {
          tabBarIcon: () => <AntDesign name="setting" size={24} color="black" />
        }
      }
    },
    {
      // Options
      defaultNavigationOptions: ({ navigation }) => ({})
    }
  )
)
``` 


### Handling the titles showing in status bar

Expo has `Constants` that you can use to figure out a few widths and heights

```jsx
import React from 'react'
import styled from 'styled-components'
import Constants from 'expo-constants'

const Home = () => {
  return (
    <ViewContainer>
      Hello
    </ViewContainer>
  )
}

const ViewContainer = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Constants.statusBarHeight}
  background-color: #efefef;
  align-items: center;
  justify-content: center;
`
```
