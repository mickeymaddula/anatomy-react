import { useCallback, useEffect, useState } from 'react';
import TokenRenderer from './TokenRenderer';

import './TokensTable.scss';

export interface TokensTableProps {
  theme: string;
  mode: string;
}

const TokensTable = (props: TokensTableProps) => {
  interface Tokens {
    [key: string]: any;
  }

  const [tokens, setTokens] = useState<Tokens>({});

  const getTokens = useCallback(async () => {
    const res = await fetch(
      `https://cdn.jsdelivr.net/npm/@boston-scientific/anatomy-tokens@5.0.0-beta.18/lib/json/${props.theme}/${props.mode}.json`
    );
    setTokens(await res.json());
  }, [props.mode, props.theme]);

  useEffect(() => {
    getTokens();
  }, [getTokens]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(tokens).map((token) => (
          <tr key={token}>
            <td>{token}</td>
            <td>
              <TokenRenderer name={token} value={tokens[token]} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TokensTable;
