//  NOTE: This can be only used in the backend
// if you want to use this on the frontend you should just
// get it from process.env
//
const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];
  console.log('config.ts', process.env, environmentVariable);
  console.log(unvalidatedEnvironmentVariable);
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    );
  }
  return unvalidatedEnvironmentVariable;
};

export const config = {
  baseUrl: getEnvironmentVariable('NEXT_PUBLIC_API_URL'),
  apiUrl: `${getEnvironmentVariable('NEXT_PUBLIC_API_URL')}/api`,
  pageSize: 5,
};
