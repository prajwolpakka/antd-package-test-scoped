# @prajwolpakka/antd-extended

Reusable React 19 components built on Ant Design v6.

## Installation

```bash
# npm
npm install @prajwolpakka/antd-extended antd react react-dom

# yarn
yarn add @prajwolpakka/antd-extended antd react react-dom

# pnpm
pnpm add @prajwolpakka/antd-extended antd react react-dom
```

Peer dependencies:

- react ^19
- react-dom ^19
- antd 6.0.0-alpha.1

## Quick Start

### Components

```tsx
import React from 'react';
import { Button, Input, Card } from '@prajwolpakka/antd-extended';

function App() {
  return (
    <Card header="My Card">
      <Input placeholder="Enter text" />
      <Button variant="primary">Click me</Button>
    </Card>
  );
}

export default App;
```

### Hook

```tsx
import React from 'react';
import { Button, Input, useFormHandler } from '@prajwolpakka/antd-extended';

function MyForm() {
  const { values, errors, handleChange, validate } = useFormHandler({
    name: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Submit form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={values.name}
        onChange={(e) => handleChange('name', e.target.value)}
        placeholder="Name"
      />
      {errors.name && <span>{errors.name}</span>}

      <Input
        value={values.email}
        onChange={(e) => handleChange('email', e.target.value)}
        placeholder="Email"
      />
      {errors.email && <span>{errors.email}</span>}

      <Button htmlType="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
}

export default MyForm;
```

### Utilities

```ts
// Validators
import {
  validateEmail,
  validatePassword,
  validateRequired,
} from '@prajwolpakka/antd-extended';

// Token helpers
import { setToken, getToken, removeToken } from '@prajwolpakka/antd-extended';

const isValidEmail = validateEmail('user@example.com');
const isValidPassword = validatePassword('MyPassword123');
const isRequired = validateRequired('value');

setToken('auth', 'token123');
const token = getToken('auth');
removeToken('auth');
```

## API Reference

### Components

- Button (extends AntD Button)
  - Props: all AntD Button props +
    - variant: 'primary' | 'secondary' | 'danger'
    - loading?: boolean

- Input (extends AntD Input)
  - Props: all AntD Input props +
    - icon?: React.ReactNode
    - validator?: (value: string) => boolean

- Card (extends AntD Card)
  - Props: all AntD Card props +
    - header?: React.ReactNode
    - footer?: React.ReactNode

### Hook: useFormHandler

Parameters:

- initialValues: Record<string, any>
- validators?: Record<string, (value: any) => string | null>

Returns:

- values, errors, handleChange(field, value), reset(), validate()

### Utilities

- Validators: validateEmail, validatePassword, validateRequired
- Tokens: setToken, getToken, removeToken

## Development

```bash
pnpm install
pnpm build
pnpm test
```

## License

MIT
