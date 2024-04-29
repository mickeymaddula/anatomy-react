import { useEffect, useState } from 'react';

interface Props {
  name: string;
  value: string;
}

const TokenRenderer = (props: Props) => {
  const [renderedToken, setRenderedToken] = useState(<div />);

  useEffect(() => {
    const specificConditions = ['breakpoint'];
    const stringConditions = ['#', 'rgb', 'hsl, linear-gradient'];
    const spacingConditions = ['rem', 'em', 'px'];

    if (specificConditions.some((cond) => props.name.includes(cond))) {
      setRenderedToken(<div className={props.name} />);
    } else if (stringConditions.some((cond) => props.value.includes(cond))) {
      setRenderedToken(<div className={`${props.name} token-color`} style={{ background: `var(--${props.name})` }} />);
    } else if (props.name.includes('border-radius')) {
      setRenderedToken(<div className={`${props.name} token-border`} style={{ borderRadius: props.value }} />);
    } else if (props.name.includes('border')) {
      setRenderedToken(<div className={`${props.name} token-border`} style={{ borderWidth: props.value }} />);
    } else if (spacingConditions.some((cond) => props.value.includes(cond))) {
      setRenderedToken(
        <div className={`${props.name} token-spacing`} style={{ width: props.value, height: props.value }} />
      );
    } else {
      setRenderedToken(<div className={props.name} />);
    }
  }, [props.name, props.value]);

  return renderedToken;
};

export default TokenRenderer;
