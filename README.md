# JS Runtime Benchmarls

This is a JS runtime benchmark comparisson.  
Here are tested:

- [**Node**][node] (v21.1.0)
- [**Deno**][deno] (v1.38.0)
- [**Bun**][bun] (v1.0.9)

## How?

How to compare objectively the three runtimes?

The way used on this projet was with http requests.  
Servers with the runtimes, running on different ports were set.

[**Autocannon**][autocannon] is been used to benchmark each server based on:

- latency
- requests per second
- bytes per second

For this benchmarking, the pc build used was:
<details>
  <summary>Click to expand</summary>

OS: Arch Linux x86_64  
Kernel: 6.5.9-arch2-1  
DE: GNOME 45.1  
CPU: AMD Custom APU 0405 (8) @ 2.800GH  
GPU: AMD ATI AMD Custom GPU 0405  
Memory: 14829MiB  

</details>

## Results

**Node**:

| Stat    | 2.5% | 50%  | 97.5% | 99%  | Avg     | Stdev   | Max   |
| ------- | ---- | ---- | ----- | ---- | ------- | ------- | ----- |
| Latency | 0 ms | 0 ms | 1 ms  | 2 ms | 0.1 ms | 0.44 ms | 21 ms |


| Stat      | 1%     | 2.5%   | 50%     | 97.5%  | Avg     | Stdev   | Min    |
| --------- | ------ | ------ | ------- | ------ | ------- | ------  | ------ |
| Req/Sec   | 11159  | 11159  | 17551   | 18287  | 16652.73| 1995.08 | 11156  |
| Bytes/Sec | 2.13 MB |  2.13 MB | 3.35 MB | 3.49 MB | 3.18 MB | 381 kB | 2.13 MB

**Deno**:

| Stat    | 2.5% | 50%  | 97.5% | 99%  | Avg     | Stdev   | Max    |
| ------- | ---- | ---- | ----- | ---- | ------- | ------- | ------ |
| Latency | 0 ms | 0 ms | 0 ms  | 0 ms | 0.01 ms | 0.08 ms | 22 ms  |

| Stat      | 1%     | 2.5%   | 50%    | 97.5%   | Avg     | Stdev  | Min    |
| --------- | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| Req/Sec   | 39,871 | 39,871 | 51,551 | 54,367  | 50,445.1 | 3,847.6 | 39,845 |  
| Bytes/Sec | 5.98 MB | 5.98 MB | 7.73 MB | 8.16 MB | 7.57 MB | 577 kB | 5.98 MB |

**Bun**:

| Stat    | 2.5% | 50%  | 97.5% | 99%  | Avg     | Stdev   | Max   |
| ------- | ---- | ---- | ----- | ---- | ------- | ------- | ----- |
| Latency | 0 ms | 0 ms | 0 ms  | 0 ms | 0.01 ms | 0.08 ms | 21 ms |

| Stat      | 1%      | 2.5%    | 50%    | 97.5%   | Avg      | Stdev   | Min     |
| --------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- |
| Req/Sec   | 42751   | 42751   | 62751  | 63871  | 58866.91 | 6102.51 | 42732  |
| Bytes/Sec | 5.39 MB | 5.39 MB | 7.91 MB | 8.05 MB | 7.42 MB | 769 kB  | 5.38 MB |

## Conclusion

**Bun** was overall superior,  
Deno was a close second  
Node was the worst in performance by a wide margin

[node]: https://nodejs.org
[deno]: https://deno.land
[bun]: https://bun.sh/
[autocannon]: https://github.com/mcollina/autocannon
