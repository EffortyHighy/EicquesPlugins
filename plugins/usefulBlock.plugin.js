class usefulBlock {
    getInfo() {
        return {
            'id': 'usefulBlock',
            'name': 'usefulBlock',
            'blocks': [{
                'opcode': 'ugh',
                'blockType': 'reporter',
                'text': 'parenthesis [booliest]',
                'arguments': {
                    'booliest': {
                        'type': 'bool'
                    }
                }
            },
            {
                'opcode': 'pivalueidk',
                'blockType': 'reporter',
                'text': 'PI',
                'arguments': {}
            },
            {
                'opcode': 'revalr',
                'blockType': 'reporter',
                'text': 'eval [code]',
                'arguments': {
                    'code': {
                        'type': 'string',
                        'defaultValue': '0.1 + 0.2'
                    }
                }    
            },
            {
                'opcode': 'boolerious',
                'blockType': 'Boolean',
                'text': 'boolean [bro]',
                'arguments': {
                    'bro': {
                        'type': 'string',
                        'menu': 'boolmenu'
                    }
                }    
            },
            {
                'opcode': 'runcode',
                'blockType': 'command',
                'text': 'run code [codes]',
                'arguments': {
                    'codes': {
                        'type': 'string',
                        'defaultValue': 'console.log(\'hello world!\');'
                    }
                }    
            },
            {
                'opcode': 'reporterconvbool',
                'blockType': 'Boolean',
                'text': '[reporteres] to boolean',
                'arguments': {
                    'reporteres': {
                        'type': 'bool'
                    }
                }
            },
            {
                'opcode': 'infiniteyeah',
                'blockType': 'reporter',
                'text': 'Infinity',
                'arguments': {}
            },
            {
                'opcode': 'reggitboolytext',
                'blockType': 'reporter',
                'text': 'text [taxis]',
                'arguments': {
                    'taxis': {
                        'type': 'string',
                        'defaultValue': 'banana and apples'
                    }
                }

            }],
            'menus': {
                boolmenu: this._formatMenu(['true', 'false']),
            }
        };
    }
    ugh({booliest}) {
        return booliest;
    }
    pivalueidk() {
        return 3.141592653589793238462643383279502884197;
    }
    async revalr({code}) {
        const result = await eval(code);
        return result;
    }
    boolerious({bro}) {
        if (bro == 0) {
            return true;
        } else {
            return false;
        }
    }
    async runcode({codes}) {
        eval(codes);
    }
    reporterconvbool({reporteres}) {
        return reporteres;
    }
    infiniteyeah() {
        return Infinity;
    }
    reggitboolytext({taxis}) {
        return taxis;
    }
    _formatMenu(menu) {
        const m = [];
        for (let i = 0; i < menu.length; i++) {
            const obj = {};
            obj.text = menu[i];
            obj.value = i.toString();
            m.push(obj);
        }
        return m;
    }
}

Scratch.extensions.register(new usefulBlock());
