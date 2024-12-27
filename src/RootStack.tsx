import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {TodoModel} from './core/data/model/todo-model';
import {Detail} from './pages/detail';
import {Login} from './pages/login';
import {Dashboard} from './pages/main/screen-main1';
import {ScreenMain2} from './pages/main/screen-main2';
import {ScreenMain3} from './pages/main/screen-main3';
import {Screen3} from './pages/screen3';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

export type RootStackParamList = {
  Login: undefined;
  MainStack: undefined;
  Detail: {todo?: TodoModel};
  Screen3: undefined;
  Dashboard: undefined;
  ScreenMain2: undefined;
  ScreenMain3: undefined;
};

export type Screen1NavigationProp = StackNavigationProp<RootStackParamList>;

const MainStack: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="ScreenMain2" component={ScreenMain2} />
      <Stack.Screen name="ScreenMain3" component={ScreenMain3} />
    </Tab.Navigator>
  );
};

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainStack" component={MainStack} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Screen3" component={Screen3} />
    </Stack.Navigator>
  );
};

export default RootStack;
