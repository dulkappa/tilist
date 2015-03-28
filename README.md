# tilist
It is a simple todo application.

## Function
- If you click a tile, background color and font color are replaced with each other.
- [ ] You can add a new tile when you click a `+` tile.
  - [x] Add tile by using form.
- [ ] 右クリックするとタイルを消去できる
  - [ ] 右クリックだとわかりにくいので削除ボタンを追加した(要検討)
- [x] ドラッグ＆ドロップで順番を変更できる
  - [ ] Angular側でリストの順番変更を扱えていない([angular-ui/ui-sortable](https://github.com/angular-ui/ui-sortable)を参考にする)
- [ ] localstrageにしろDBにしろ、データを保存する方法を考える

## Development
tilist requires to be installed gulp before running.
To install gulp, run

```
npm install -g gulp
```

To install gulp module.

```
npm install
```

To install dependencies, use bower.

```
bower install
```

To run example server, run

```
gulp
```

## License

Copyright(c)pantohon.com
