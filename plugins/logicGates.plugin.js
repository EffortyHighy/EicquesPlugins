class logicGates {
    getInfo() {
        return {
            'id': 'logicGates',
            'name': 'logicGates',
            'blocks': [{
                'opcode': 'AND',
                'blockType': 'Boolean',
                'text': '[first] AND [second]',
                'arguments': {
                    'first': {
                        'type': 'bool'
                    },
                    'second': {
                        'type': 'bool'
                    }
                }
            },
            {
                'opcode': 'OR',
                'blockType': 'Boolean',
                'text': '[first] OR [second]',
                'arguments': {
                    'first': {
                        'type': 'bool'
                    },
                    'second': {
                        'type': 'bool'
                    }
                }
            },
            {
                'opcode': 'NAND',
                'blockType': 'Boolean',
                'text': '[first] NAND [second]',
                'arguments': {
                    'first': {
                        'type': 'bool'
                    },
                    'second': {
                        'type': 'bool'
                    }
                }
            },
            {
                'opcode': 'NOR',
                'blockType': 'Boolean',
                'text': '[first] NOR [second]',
                'arguments': {
                    'first': {
                        'type': 'bool'
                    },
                    'second': {
                        'type': 'bool'
                    }
                }
            },
            {
                'opcode': 'XOR',
                'blockType': 'Boolean',
                'text': '[first] XOR [second]',
                'arguments': {
                    'first': {
                        'type': 'bool'
                    },
                    'second': {
                        'type': 'bool'
                    }
                }
            },
            {
                'opcode': 'XNOR',
                'blockType': 'Boolean',
                'text': '[first] XNOR [second]',
                'arguments': {
                    'first': {
                        'type': 'bool'
                    },
                    'second': {
                        'type': 'bool'
                    }
                }
            },
            {
                'opcode': 'NOT',
                'blockType': 'Boolean',
                'text': 'NOT [first]',
                'arguments': {
                    'first': {
                        'type': 'bool'
                    }
                }
            }],
            'menus': {}
        };
    }
    AND({first, second}) {
        if (first && second) {
            return true;
        } else {
            return false;
        }
    }
    OR({first, second}) {
        if (first || second) {
            return true;
        } else {
            return false;
        }
    }
    NAND({first, second}) {
        if (!(first && second)) {
            return true;
        } else {
            return false;
        }
    }
    NOR({first, second}) {
        if (!(first || second)) {
            return true;
        } else {
            return false;
        }
    }
    XOR({first, second}) {
        if ((first || second) && !(first && second)) {
            return true;
        } else {
            return false;
        }
    }
    XNOR({first, second}) {
        if (!(first && second) || (first && second)) {
            return true;
        } else {
            return false;
        }
    }
    NOT({first}) {
        if (!(first)) {
            return true;
        } else {
            return false;
        }
    }
}
Scratch.extensions.register(new logicGates());
