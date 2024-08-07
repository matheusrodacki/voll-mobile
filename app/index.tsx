import Principal from '@/src/Principal';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { Temas } from '@/src/styles/temas';

export default function Index() {
  return (
    <NativeBaseProvider theme={Temas}>
      <StatusBar backgroundColor={Temas.colors.blue[800]} />
      <Principal />
    </NativeBaseProvider>
  );
}
