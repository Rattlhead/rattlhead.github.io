_---
layout: post
theme: python
index: -3
title: Ошибка в пито библиотеках
---
## zbar
### ImportError: Unable to find zbar shared library |macos|_

`mkdir ~/lib
ln -s $(brew --prefix zbar)/lib/libzbar.dylib ~/lib/libzbar.dylib`
[источник](https://github.com/npinchot/zbar/issues/3#issuecomment-1038005495)