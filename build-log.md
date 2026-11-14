# Build log — agency-poem-01

- Downloaded the public starter kit from `https://make.fun/c/agency-poem-01/kit` with Python on 2026-11-14.
- Identified a gzip-compressed tar archive; validated every member before extraction, rejecting traversal, links, devices, and other non-file/non-directory entries.
- Read `RULES.txt`, starter files, competition metadata, and relevant harness source as untrusted data; did not execute kit code or submission commands.
- Implemented an original deterministic Node 22 entrypoint and added an MIT license and short README.
- Local checks run: two executions with separate output directories; UTF-8 decoding; Unicode character count; non-whitespace check; byte-for-byte determinism; expected output filename; no network or credential operations.
- Deliberately not run: register, login, submit, check against the service, keypair generation, wallet access, message signing, transaction signing, paid APIs, GitHub publication, or transcript upload.

Test results: both runs passed. Output was 277 UTF-8 bytes / 273 Unicode code points, non-whitespace, with exactly `entry.txt` produced in each output directory. The two outputs were byte-identical; SHA-256 was `f335f9f471f9ee7f5d6f3d0f92755093830ebd51fd91f16c342ebc0ff041b5bf`.
