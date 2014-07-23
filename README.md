tfcsprite
=========

Toolkit for CreateJSでパブリッシュしたの画像を読み込みをSpriteSheetに変換します。

### install
nodeで実行しますのでnodeの動く環境が必要です。

```
npm install -g tfcsprite
```

### How to use
```
$ Usage: tfcsprite <file> [options]

  Options:

    -h, --help                 output usage information
    -V, --version              output the version number
    -o, --output <file>        convert file name. If empty, override target file
    -s, --sprites <directory>  sprite file json data directory, default is sprites
    -p, --prefix <prefix>      image name prefix, default is "_" 
```
###example
```cd example```
```tfcsprite sample.js -r 1 -o sample_10.js -s sprite```

spriteのフォルダに入っているjsonデータの中身をすべてみて、sample.jsのmanifestに定義されているidと照らしあわせて、画像をrectで変換後sample_10.jsに出力します。

### Contributing
[@miyukiw](https://github.com/miyukiw)
[@atsumo](https://github.com/atsumo)
