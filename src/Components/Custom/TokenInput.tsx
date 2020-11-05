import React from "react";

import { useField, useFormikContext } from "formik";
import { Button, FormikNumberInput } from "@imploy/common-components";
import { Tokens } from "@chainsafe/web3-context/dist/context/tokensReducer";

interface ITokenInput {
  disabled?: boolean;
  label: string;
  name: string;
  tokens: Tokens;
  tokenSelectorKey: string;
  classNames?: {
    input?: string;
    button?: string;
  };
  min?: number;
  max: number;
  step?: number;
  formatter?: (value: number | string | undefined) => string;
  precision?: number;
}

const TokenInput: React.FC<ITokenInput> = ({
  classNames,
  disabled,
  label,
  tokens,
  tokenSelectorKey,
  name,
  min,
  max,
  step,
  precision,
  formatter,
}: ITokenInput) => {
  const [, , helpers] = useField(name);

  const { values } = useFormikContext();

  return (
    <>
      <FormikNumberInput
        className={classNames?.input}
        disabled={disabled}
        name={name}
        label={label}
        min={min}
        max={max}
        step={step}
        precision={precision}
        formatter={formatter}
      />
      <Button
        disabled={disabled}
        className={classNames?.button}
        onClick={() => {
          helpers.setValue(max);
        }}
        variant="outline"
        type="button"
      >
        MAX
      </Button>
    </>
  );
};

export default TokenInput;
