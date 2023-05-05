import { GestureResponderEvent, View } from 'react-native';
import { Input, CheckBox, Button, Text } from '@rneui/themed';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';

type CastOnPressType = (value: 
  | GestureResponderEvent 
  | React.FormEvent<HTMLFormElement> 
  |undefined
) => void

interface FormValues {
  ruc: string,
  user: string,
  password: string,
  remember: boolean,
}

export default function LoginForm() {
  const [hidePassword, setHidePassword] = useState(true);
  const iconPassword = hidePassword ? 'visibility' : 'visibility-off';

  const initialValues: FormValues = {
    ruc: '',
    user: '',
    password: '',
    remember: false,
  }

  const loginValidationSchema = yup.object().shape({
    ruc: yup.string().required('requerido'),
    user: yup.string().required('requerido'),
    password: yup.string().required('requerida'),
    remember: yup.bool().default(false),
  });

  return (
    <View style={{
      height: 400,
      width: '100%',
      justifyContent: 'space-around',
      paddingHorizontal: 10,
      marginVertical: 10,
    }}>
      <Formik initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => {
        console.warn(values);
      }}>
        {({ 
            handleChange, handleBlur, handleSubmit, 
            values, setFieldValue, errors, isValid 
          }) => (
          <>
            <Input
            inputMode='numeric'
            keyboardType='numeric'
            label={'RUC'}
            leftIcon={{ name:'star-outline' }}
            value={values.ruc}
            onChangeText={handleChange('ruc')}
            onBlur={handleBlur('ruc')}
            maxLength={11}
            errorMessage={errors.ruc} />
            <Input
            label={'Usuario'}
            leftIcon={{ name: 'account-box-outline', type: 'material-community' }}
            onChangeText={handleChange('user')}
            onBlur={handleBlur('user')}
            errorMessage={errors.user}/>
            <Input 
            label={'Contraseña'}
            leftIcon={{ name:'lock-outline' }}
            rightIcon={
              !!values.password 
              ? { 
                  name: iconPassword, 
                  onPress: () => setHidePassword(h => !h),
                  containerStyle: {borderRadius:15}
                }
              : undefined
            }
            secureTextEntry={hidePassword}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            errorMessage={errors.password}/>
            <CheckBox 
            checked={values.remember} 
            title='Recordar usuario'
            onPress={() => setFieldValue('remember', !values.remember)}/>
            <Button 
            title='Inicia sesión' 
            disabled={!isValid}
            onPress={handleSubmit as CastOnPressType} />
          </>
        )}
      </Formik>
    </View>
  );
}