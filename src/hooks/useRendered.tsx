import React from 'react';

export default function Rendered() {
  const [rendered, setRendered] = React.useState(false);

  React.useEffect(() => setRendered(true), []);
  return rendered;
}
