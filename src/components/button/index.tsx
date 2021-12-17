import { retriever } from "@retriever-ui/react";

const Button = ({ height, size, radius, fontWeight, border, dataTestId, onClick, isPrevious }: any) => (
    <retriever.button
      h={height}
      pX={size}
      radius={radius}
      fontWeight={fontWeight}
      border={border}
      data-testid={dataTestId}
      onClick={onClick}
    >
    {isPrevious ? "<" : ">"}
    </retriever.button>
);

export default Button;
