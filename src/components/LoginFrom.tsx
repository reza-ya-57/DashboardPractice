import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    username: yup.string().required('این فیلد ضروری است'),
    password: yup.string().required('این فیلد ضروری است'),
  })
  .required();

type ILoginPayload = {
  username: string;
  password: string;
};

function LoginFrom() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: ILoginPayload) => console.log(data);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        width: '100%',
      }}
      component={'form'}
      onSubmit={
        handleSubmit(onSubmit) as React.FormEventHandler<HTMLFormElement>
      }
    >
      <TextField
        inputProps={{ ...register('username') }}
        variant="filled"
        label="نام کاربری"
        error={!!errors.username}
        helperText={errors.username?.message}
        fullWidth
        size="small"
      />
      <TextField
        inputProps={{ ...register('password') }}
        variant="filled"
        error={!!errors.password}
        helperText={errors.password?.message}
        label="پسورد"
        fullWidth
        size="small"
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* <CircularProgress /> */}
        <Button
          sx={{ width: '100px', borderRadius: '6px', marginLeft: 'auto' }}
          variant="contained"
          type="submit"
        >
          ورود
        </Button>
      </Box>
    </Box>
  );
}

export default LoginFrom;
