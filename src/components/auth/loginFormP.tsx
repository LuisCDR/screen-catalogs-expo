import { GestureResponderEvent, View } from 'react-native';
import { TextInput, Checkbox, Button, HelperText } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { create } from 'zustand';

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
  const useA = create(() => ({
    
  }));
  const [hidePassword, setHidePassword] = useState(true);
  const iconPassword = hidePassword ? 'eye' : 'eye-off';

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
            <TextInput
            inputMode='numeric'
            keyboardType='numeric'
            label={'RUC'}
            left={<TextInput.Icon icon='star-outline' />}
            value={values.ruc}
            onChangeText={handleChange('ruc')}
            onBlur={handleBlur('ruc')}
            maxLength={11}
            error={Boolean(errors.ruc)}/>
            <HelperText type='error' visible={Boolean(errors.ruc)}>
              {errors.ruc}
            </HelperText>
            <TextInput
            label={'Usuario'}
            left={<TextInput.Icon icon='account-box-outline' />}
            onChangeText={handleChange('user')}
            onBlur={handleBlur('user')}
            error={Boolean(errors.user)}/>
            <HelperText type='error' visible={Boolean(errors.user)}>
              {errors.user}
            </HelperText>
            <TextInput 
            label={'Contraseña'}
            left={<TextInput.Icon icon='lock-outline' />}
            right={
              !!values.password 
              ? <TextInput.Icon icon={iconPassword} 
                  onPress={() => setHidePassword(h => !h)}
                  style={{borderRadius:15}}
                />
              : undefined
            }
            secureTextEntry={hidePassword}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            error={Boolean(errors.password)}/>
            <HelperText type='error' visible={Boolean(errors.password)}>
              {errors.password}
            </HelperText>
            <Checkbox.Item
            position='leading'
            style={{width: 200}}
            status={values.remember ? 'checked' : 'unchecked'}
            label='Recordar usuario'
            onPress={() => setFieldValue('remember', !values.remember)}/>
            <Button
            mode='contained'
            disabled={!isValid}
            onPress={handleSubmit as CastOnPressType}>
              Inicia sesión
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
}