export const POST = 'post';
export const GET = 'get';

export const END_POINT = 'http://172.17.0.2:8808';

// export const END_POINT = 'http://localhost:8808';


export const APIS ={
  login: ['/iam/user/pwdLoginChecked', GET],
  flowSuccess:['/iam/user/flowsuccess',GET],

  api1:['/ga/test/api1',POST],
  api2:['/ga/test/api2',POST],
  api3:['/ga/test/api3',GET],

};
