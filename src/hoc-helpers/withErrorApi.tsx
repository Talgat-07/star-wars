import React from "react";
import ErrorMessage from "@components/ErrorMessage";

export const withErrorApi = (View: React.FC, status: boolean) => {
  return (props: object) => {
    return <>{!status ? <View {...props} /> : <ErrorMessage />}</>;
  };
};
