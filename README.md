# JS Runtime Benchmarls

This is a JS runtime benchmark comparisson.  
Here are tested:

- [**Node**][node] (v18.13.0)
- [**Deno**][deno] (v1.29.4)
- [**Bun**][bun] (v0.5.0)

## How?

How to compare objectively the three runtimes?

The way used on this projet was with http requests.  
Servers with the runtimes, running on different ports were set.

[**Autocannon**][autocannon] is been used to benchmark each server based on:

- latency
- requests per second
- bytes per second

The machine used for this benchmarking can be checked [here](macbook-specs)

## Results

**Node**:

| Stat    | 2.5% | 50%  | 97.5% | 99%  | Avg     | Stdev   | Max    |
|---------|------|------|-------|------|---------|---------|--------|
| Latency | 1 ms | 1 ms | 4 ms  | 6 ms | 1.46 ms | 1.27 ms | 51 ms  |

| Stat      | 1%     | 2.5%   | 50%     | 97.5%  | Avg     | Stdev  | Min    |
|-----------|--------|--------|---------|--------|---------|--------|--------|
| Req/Sec   | 2649   | 2649   | 5275    | 5451   | 4949.5  | 836.34 | 2649   |
| Bytes/Sec | 631 kB | 631 kB | 1.26 MB | 1.3 MB | 1.18 MB | 199 kB | 630 kB |

**Deno** (v1.29.4):

| Stat    | 2.5% | 50%  | 97.5% | 99%  | Avg     | Stdev   | Max     |
|---------|------|------|-------|------|---------|---------|---------|
| Latency | 0 ms | 1 ms | 4 ms  | 6 ms | 1.46 ms | 2.73 ms | 112 ms  |

| Stat      | 1%     | 2.5%   | 50%    | 97.5%   | Avg     | Stdev  | Min    |
|-----------|--------|--------|--------|---------|---------|--------|--------|
| Req/Sec   | 2781   | 2781   | 5035   | 5987    | 4838.11 | 957.74 | 2781   |
| Bytes/Sec | 531 kB | 531 kB | 962 kB | 1.14 MB | 924 kB  | 183 kB | 531 kB |

**Bun** (v0.5.0):

| Stat    | 2.5% | 50%  | 97.5% | 99%  | Avg     | Stdev   | Max    |
|---------|------|------|-------|------|---------|---------|--------|
| Latency | 0 ms | 0 ms | 4 ms  | 1 ms | 0.07 ms | 0.34 ms | 23 ms  |

| Stat      | 1%      | 2.5%    | 50%    | 97.5%   | Avg      | Stdev   | Min     |
|-----------|---------|---------|--------|---------|----------|---------|---------|
| Req/Sec   | 12215   | 12215   | 17487  | 17839   | 16907.64 | 1549.99 | 12210   |
| Bytes/Sec | 1.54 MB | 1.54 MB | 2.2 MB | 2.25 MB | 2.13 MB  | 195 kB  | 1.54 MB |

## Conclusion

**Bun** had less latency, was able to handle more requests per second and transfer more bytes per second.

[node]: https://nodejs.org
[deno]: https://deno.land
[bun]: https://bun.sh/
[autocannon]: https://github.com/mcollina/autocannon
[macbook-specs]: https://everymac.com/systems/apple/macbook_pro/specs/macbook-pro-core-i5-2.8-13-mid-2014-retina-display-specs.html
