---
title: React Native tips
date: 2019-11-22
---

### Changing navigation icon and color based on focus

```jsx
<TabBarIcon
  focused={focused}
  name={
    Platform.OS === 'ios'
      ? `ios-information-circle${focused ? '' : '-outline'}` // changing icon based on focus
      : 'md-information-circle'
  }
/>
```

`focused` is a `boolean` here that is part of React Navigation's `navigationOptions`


```jsx
import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? 'teal' : 'salmon'}
    />
  );
}
```


### Defining `shadow` if `iOS` and `elevation` if Android

Android does not support box shadows while iOS does. The Android equivalent of shadow is `elevation: number`

```jsx
const styles = StyleSheet.create({
  tabBarInfoContainer: {
  ...Platform.select({ // Platform specific box shadow
    ios: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: -3 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    android: {
      elevation: 20,
    },
  }),
}
```

### Opening links in  Browser

[Expo WebBrowser](https://docs.expo.io/versions/latest/sdk/webview/), also look into [Expo WebView](https://docs.expo.io/versions/latest/sdk/webview/) and see how that is different

```jsx
function handleAboutPress() { 
  WebBrowser.openBrowserAsync(
    'https://aamnah.com'
  );
}
```

```jsx
<Text onPress={handleAboutPress}>About</Text>
```