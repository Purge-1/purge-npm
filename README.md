# What is this?

Get perfect shadows every time for the non-designer.

# Installation

`npm i purge --save`

Then...

```
import { purge } from 'purge';

purge({
    purge_type: 'soft',
    padding: false
})
```
## Options

Purge supports 2 options, both of which are optional

• *purge_type* - _hard | _soft (Defaults to soft)
• *padding* - _boolean_ (Defaults to false)