# civita-sdk

Lightweight TypeScript SDK for community-engagement primitives on the Stacks blockchain — polls, badges, counters.

## Install

```bash
npm install civita-sdk
```

## Usage

```ts
import { buildReadOnlyUrl, parseContractId, microStxToStx } from 'civita-sdk';

const contract = parseContractId('SP16F6839630K5XX06KE7KVNSNMYBK89912NH6N4C.poll-of-day-a1');
if (contract) {
  const url = buildReadOnlyUrl({ contract, functionName: 'get-total' });
  console.log(url);
}

console.log(microStxToStx(2_500_000)); // 2.5
```

## What's inside

- `constants` — network endpoints, Clarity version, sensible defaults
- `utils` — address/contract-name validation, parsing, formatting, STX conversion
- `contract` — read-only call URL helpers
- `types` — `ContractIdentifier`, `PollOption`, `Badge`, `CounterState`, `TxOptions`

## Scripts

```bash
npm test           # vitest run
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run build      # tsup → dist/
```

## License

MIT
