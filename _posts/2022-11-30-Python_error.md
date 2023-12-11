---
layout: post
theme: python
index: -3
title: Ошибка в Python библиотеках
---
## zbar
### ImportError: Unable to find zbar shared library |macos|

    mkdir ~/lib
    ln -s $(brew --prefix zbar)/lib/libzbar.dylib ~/lib/libzbar.dylib


[источник](https://github.com/npinchot/zbar/issues/3#issuecomment-1038005495)

## weasyprint

### OSError: cannot load library 'gobject-2.0-0': dlopen(gobject-2.0-0, 0x0002): tried: 'gobject-2.0-0' (no such file), '/System/Volumes/Preboot/Cryptexes/OSgobject-2.0-0' (no such file), '/usr/lib/gobject-2.0-0' (no such file, not in dyld cache), 'gobject-2.0-0' (no such file), '/usr/local/lib/gobject-2.0-0' (no such file), '/usr/lib/gobject-2.0-0' (no such file, not in dyld cache). Additionally, ctypes.util.find_library() did not manage to locate a library called 'gobject-2.0-0'  |macos|


    sudo ln -s /opt/homebrew/opt/glib/lib/libgobject-2.0.0.dylib /usr/local/lib/gobject-2.0
    sudo ln -s /opt/homebrew/opt/pango/lib/libpango-1.0.dylib /usr/local/lib/pango-1.0
    sudo ln -s /opt/homebrew/opt/harfbuzz/lib/libharfbuzz.dylib /usr/local/lib/harfbuzz
    sudo ln -s /opt/homebrew/opt/fontconfig/lib/libfontconfig.1.dylib /usr/local/lib/fontconfig-1
    sudo ln -s /opt/homebrew/opt/pango/lib/libpangoft2-1.0.dylib /usr/local/lib/pangoft2-1.0


[источник](https://github.com/Kozea/WeasyPrint/issues/1448#issuecomment-925549118)
