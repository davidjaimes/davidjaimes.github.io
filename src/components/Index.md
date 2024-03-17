---
---

Hello there! My name is David. I'm a grant, financial analyst for the City of San Diego. I also used to be an astronomer studying eclipsing binaries, gyrochronoly of sun-like stars, and supernovae spectra. I enjoy trail running, bicycling, fine dinning, web design, programming, writing software, and reading in my free time. 

## Get Started with Python

Install the [Miniforge distribution](https://github.com/conda-forge/miniforge):
```shell frame="none"
bash Miniforge3-MacOSX-arm64.sh
```

Create an environment with the name `arm64`:
```shell frame="none"
mamba create -n arm64 python=3.12 pandas pyarrow
```

Activate newly created environment:
```shell frame="none"
mamba activate arm64
```

Install other packages:
```shell frame="none"
pip install jupyterlab python-calamine xlsxwriter
```
