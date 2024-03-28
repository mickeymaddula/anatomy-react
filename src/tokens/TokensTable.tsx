import { useEffect, useState } from 'react';

const TokensTable = () => {
  const [tokens, setTokens] = useState({});

  const getTokens = async () => {
    const res = await fetch(
      'https://cdn.jsdelivr.net/npm/@boston-scientific/anatomy-tokens@5.0.0-beta.4/lib/json/corporate/light.json'
    );
    setTokens(await res.json());
  };

  useEffect(() => {
    getTokens();
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Example</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(tokens).map((token) => (
          <tr key={token}>
            <td>TBD</td>
            <td>{token}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TokensTable;
