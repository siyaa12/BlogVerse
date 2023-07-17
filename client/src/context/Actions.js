export const LoginStart =(credentials)=>(
{type:"login_start"}
);

export const LoginSuccess=(user)=>(
  {
    type:"login_success",
    payload:user
  }
);

export const LoginFail=()=>(
  {
    type:"login_fail",
  }
)