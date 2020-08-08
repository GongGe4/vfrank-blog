{
    "type": "Program",
    "start": 0,
    "end": 704,
    "body": [{
            "type": "VariableDeclaration",
            "start": 179,
            "end": 394,
            "declarations": [{
                "type": "VariableDeclarator",
                "start": 183,
                "end": 393,
                "id": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 187,
                    "name": "tips"
                },
                "init": {
                    "type": "ArrayExpression",
                    "start": 190,
                    "end": 393,
                    "elements": [{
                            "type": "Literal",
                            "start": 194,
                            "end": 241,
                            "value": "Click on any AST node with a '+' to expand it",
                            "raw": "\"Click on any AST node with a '+' to expand it\""
                        },
                        {
                            "type": "Literal",
                            "start": 246,
                            "end": 330,
                            "value": "Hovering over a node highlights the    corresponding location in the source code",
                            "raw": "\"Hovering over a node highlights the \\\n   corresponding location in the source code\""
                        },
                        {
                            "type": "Literal",
                            "start": 335,
                            "end": 391,
                            "value": "Shift click on an AST node to expand the whole subtree",
                            "raw": "\"Shift click on an AST node to expand the whole subtree\""
                        }
                    ]
                }
            }],
            "kind": "let"
        },
        {
            "type": "FunctionDeclaration",
            "start": 396,
            "end": 480,
            "id": {
                "type": "Identifier",
                "start": 405,
                "end": 414,
                "name": "printTips"
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
                "type": "BlockStatement",
                "start": 417,
                "end": 480,
                "body": [{
                    "type": "ExpressionStatement",
                    "start": 421,
                    "end": 478,
                    "expression": {
                        "type": "CallExpression",
                        "start": 421,
                        "end": 477,
                        "callee": {
                            "type": "MemberExpression",
                            "start": 421,
                            "end": 433,
                            "object": {
                                "type": "Identifier",
                                "start": 421,
                                "end": 425,
                                "name": "tips"
                            },
                            "property": {
                                "type": "Identifier",
                                "start": 426,
                                "end": 433,
                                "name": "forEach"
                            },
                            "computed": false
                        },
                        "arguments": [{
                            "type": "ArrowFunctionExpression",
                            "start": 434,
                            "end": 476,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [{
                                    "type": "Identifier",
                                    "start": 435,
                                    "end": 438,
                                    "name": "tip"
                                },
                                {
                                    "type": "Identifier",
                                    "start": 440,
                                    "end": 441,
                                    "name": "i"
                                }
                            ],
                            "body": {
                                "type": "CallExpression",
                                "start": 446,
                                "end": 476,
                                "callee": {
                                    "type": "MemberExpression",
                                    "start": 446,
                                    "end": 457,
                                    "object": {
                                        "type": "Identifier",
                                        "start": 446,
                                        "end": 453,
                                        "name": "console"
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "start": 454,
                                        "end": 457,
                                        "name": "log"
                                    },
                                    "computed": false
                                },
                                "arguments": [{
                                    "type": "BinaryExpression",
                                    "start": 458,
                                    "end": 475,
                                    "left": {
                                        "type": "TemplateLiteral",
                                        "start": 458,
                                        "end": 469,
                                        "expressions": [{
                                            "type": "Identifier",
                                            "start": 465,
                                            "end": 466,
                                            "name": "i"
                                        }],
                                        "quasis": [{
                                                "type": "TemplateElement",
                                                "start": 459,
                                                "end": 463,
                                                "value": {
                                                    "raw": "Tip ",
                                                    "cooked": "Tip "
                                                },
                                                "tail": false
                                            },
                                            {
                                                "type": "TemplateElement",
                                                "start": 467,
                                                "end": 468,
                                                "value": {
                                                    "raw": ":",
                                                    "cooked": ":"
                                                },
                                                "tail": true
                                            }
                                        ]
                                    },
                                    "operator": "+",
                                    "right": {
                                        "type": "Identifier",
                                        "start": 472,
                                        "end": 475,
                                        "name": "tip"
                                    }
                                }]
                            }
                        }]
                    }
                }]
            }
        },
        {
            "type": "FunctionDeclaration",
            "start": 483,
            "end": 498,
            "id": {
                "type": "Identifier",
                "start": 492,
                "end": 493,
                "name": "_"
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
                "type": "BlockStatement",
                "start": 496,
                "end": 498,
                "body": []
            }
        },
        {
            "type": "EmptyStatement",
            "start": 498,
            "end": 499
        },
        {
            "type": "ExpressionStatement",
            "start": 501,
            "end": 582,
            "expression": {
                "type": "CallExpression",
                "start": 501,
                "end": 581,
                "callee": {
                    "type": "Identifier",
                    "start": 501,
                    "end": 502,
                    "name": "_"
                },
                "arguments": [{
                    "type": "BinaryExpression",
                    "start": 503,
                    "end": 580,
                    "left": {
                        "type": "Literal",
                        "start": 503,
                        "end": 541,
                        "value": "tttttttttttttttttttttttttttttttttttt",
                        "raw": "'tttttttttttttttttttttttttttttttttttt'"
                    },
                    "operator": "+",
                    "right": {
                        "type": "Literal",
                        "start": 544,
                        "end": 580,
                        "value": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                        "raw": "'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'"
                    }
                }]
            }
        },
        {
            "type": "ExpressionStatement",
            "start": 584,
            "end": 702,
            "expression": {
                "type": "CallExpression",
                "start": 584,
                "end": 702,
                "callee": {
                    "type": "MemberExpression",
                    "start": 584,
                    "end": 597,
                    "object": {
                        "type": "Identifier",
                        "start": 584,
                        "end": 590,
                        "name": "String"
                    },
                    "property": {
                        "type": "Identifier",
                        "start": 591,
                        "end": 597,
                        "name": "format"
                    },
                    "computed": false
                },
                "arguments": [{
                        "type": "Literal",
                        "start": 598,
                        "end": 639,
                        "value": "String.formatString.formatString.format",
                        "raw": "'String.formatString.formatString.format'"
                    },
                    {
                        "type": "CallExpression",
                        "start": 641,
                        "end": 701,
                        "callee": {
                            "type": "Identifier",
                            "start": 641,
                            "end": 642,
                            "name": "_"
                        },
                        "arguments": [{
                                "type": "BinaryExpression",
                                "start": 643,
                                "end": 680,
                                "left": {
                                    "type": "Literal",
                                    "start": 643,
                                    "end": 662,
                                    "value": 1111111111111111200,
                                    "raw": "1111111111111111111"
                                },
                                "operator": "+",
                                "right": {
                                    "type": "Literal",
                                    "start": 665,
                                    "end": 680,
                                    "value": 222222222222222,
                                    "raw": "222222222222222"
                                }
                            },
                            {
                                "type": "Literal",
                                "start": 682,
                                "end": 700,
                                "value": 333333333333333300,
                                "raw": "333333333333333333"
                            }
                        ]
                    }
                ]
            }
        }
    ],
    "sourceType": "module"
}