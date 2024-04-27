const loggingInterop_1 = require("@peacockproject/core/loggingInterop");
(0, loggingInterop_1.log)(loggingInterop_1.LogLevel.INFO, "[Heritage UI] Dashboard replacement active.")
module.exports = function HUI_PEACOCK_MENU_DASHBOARD(controller) {
    controller.configManager.configs.EiderDashboard = {
      "controller": "group",
      "row": 1,
      "nrows": 3,
      "ncols": 10,
      "layoutchildren": true,
      "children": {
          "$mergearrays": [
              {
                  "$if": {
                      "$condition": {
                          "$and": [
                              "$isuser vr",
                              {
                                  "$or": [
                                      "$isvrdeviceavailable",
                                      "$eq ($platform,orbis)"
                                  ]
                              }
                          ]
                      },
                      "$then": [
                          {
                              "view": "menu3.basic.MenuTileTall",
                              "row": 0,
                              "col": 0,
                              "nrows": 3,
                              "ncols": 4,
                              "data": {
                                  "header": "$loc UI_MENU_PAGE_HUB_CAMPAIGN",
                                  "title": "$loc UI_MENU_PAGE_HUB_STORY",
                                  "icon": "story",
                                  "image": "$res images/hui/test.jpg"
                              },
                              "actions": {
                                  "accept": [
                                      {
                                          "set-selected": {
                                              "target": "category_story"
                                          }
                                      }
                                  ],
                                  "select": {
                                      "replace-children": {
                                          "target": "headline_container",
                                          "children": [
                                              {
                                                  "view": "menu3.basic.HeadlineElement",
                                                  "selectable": false,
                                                  "pressable": false,
                                                  "data": {
                                                      "header": "$loc UI_MENU_PAGE_HUB_CAMPAIGN",
                                                      "title": "$loc UI_MENU_PAGE_HUB_STORY",
                                                      "typeicon": "story"
                                                  }
                                              }
                                          ]
                                      }
                                  },
                                  "deselect": {
                                      "replace-children": {
                                          "target": "headline_container",
                                          "children": []
                                      }
                                  }
                              }
                          },
                          {
                              "$databinding menusystem/pages/hub/dashboard/data/data_dashboardtile_vr.json": {
                                  "view": "menu3.basic.ButtonTileXXSmall",
                                  "row": 3,
                                  "col": 6,
                                  "nrows": 3,
                                  "ncols": 2,
                                  "data": {
                                      "header": "$.Header",
                                      "title": "$.Title",
                                      "icon": "$.Icon",
                                      "image": "$.Image"
                                  },
                                  "actions": {
                                      "$include": "menusystem/pages/hub/dashboard/actions/actions_dashboardtile_vr.json"
                                  }
                              }
                          }
                      ],
                      "$else": {
                          "view": "menu3.basic.MenuTileTall",
                          "row": 0,
                          "col": 0,
                          "nrows": 3,
                          "ncols": 4,
                          "data": {
                              "header": "$loc UI_MENU_PAGE_HUB_CAMPAIGN",
                              "title": "$loc UI_MENU_PAGE_HUB_STORY",
                              "icon": "story",
                              "image": "$res images/hui/test.jpg"
                          },
                          "actions": {
                              "accept": [
                                  {
                                      "set-selected": {
                                          "target": "category_story"
                                      }
                                  }
                              ],
                              "select": {
                                  "replace-children": {
                                      "target": "headline_container",
                                      "children": [
                                          {
                                              "view": "menu3.basic.HeadlineElement",
                                              "selectable": false,
                                              "pressable": false,
                                              "data": {
                                                  "header": "$loc UI_MENU_PAGE_HUB_CAMPAIGN",
                                                  "title": "$loc UI_MENU_PAGE_HUB_STORY",
                                                  "typeicon": "story"
                                              }
                                          }
                                      ]
                                  }
                              },
                              "deselect": {
                                  "replace-children": {
                                      "target": "headline_container",
                                      "children": []
                                  }
                              }
                          }
                      }
                  }
              },
              {
                "view": "menu3.basic.ButtonTileXXSmall",
                "row": 3,
                "col": 8,
                "nrows": 3,
                "ncols": 2,
                "data":{
                    "title": "$loc UI_PEACOCK_GO_OFFLINE",
                    "icon": "goonline",
                    "image": "$res images/ui/tiles/button_goonline.jpg"
                },
                "actions": {
                    "accept": {
                        "force-offline": {}
                    },
                    "select": {
                        "replace-children": {
                            "target": "headline_container",
                            "children": [
                                {
                                    "view": "menu3.basic.HeadlineElement",
                                    "selectable": false,
                                    "pressable": false,
                                    "data": {
                                        "header": "",
                                        "title": "$loc UI_PEACOCK_GO_OFFLINE",
                                        "typeicon": "goonline"
                                    }
                                }
                            ]
                        }
                    },
                    "deselect": {
                        "replace-children": {
                            "target": "headline_container",
                            "children": []
                        }
                    }
                }
            },
              {
                  "view": "menu3.basic.MenuTileTall",
                  "row": 0,
                  "col": 2,
                  "nrows": 3,
                  "ncols": 4,
                  "data": {
                      "title": "$loc UI_HERITAGE_EVERGREEN",
                      "header": "$loc UI_HERITAGE_GAMEMODE",
                      "icon": "evergreen_gamemode",
                      "image": "$res images/livetile/tile_gamemode_evergreen.jpg"
                  },
                  "actions": {
                      "accept": [
                          {
                              "set-menu-context": {
                                  "value": {
                                      "onpageopened": {
                                          "set-selected": {
                                              "target": "PLANNING_BUTTON_PLAY"
                                          },
                                          "trigger-input": {
                                              "action": "accept"
                                          }
                                      }
                                  }
                              }
                          },
                          {
                              "link": {
                                  "page": "planning",
                                  "args": {
                                      "url": "planning",
                                      "args": {
                                          "contractid": "f8ec92c2-4fa2-471e-ae08-545480c746ee",
                                          "resetescalation": false
                                      },
                                      "contractid": "f8ec92c2-4fa2-471e-ae08-545480c746ee"
                                  }
                              }
                          }
                      ],
                      "select": {
                          "replace-children": {
                              "target": "headline_container",
                              "children": [
                                  {
                                      "view": "menu3.basic.HeadlineElement",
                                      "selectable": false,
                                      "pressable": false,
                                      "data": {
                                          "title": "$loc UI_HERITAGE_EVERGREEN",
                                          "header": "$loc UI_HERITAGE_GAMEMODE",
                                          "typeicon": "evergreen_gamemode"
                                      }
                                  }
                              ]
                          }
                      },
                      "deselect": {
                          "replace-children": {
                              "target": "headline_container",
                              "children": []
                          }
                      },
                      "actiony": {
                          "prompt_label": "Go to Destination",
                          "link": {
                              "page": "gamemode_evergreen",
                              "args": {
                                  "locationId": "LOCATION_PARENT_SNUG"
                              }
                          }
                      }
                  }
              },
              {
                  "view": "menu3.basic.MenuTileTall",
                  "row": 0,
                  "col": 4,
                  "nrows": 3,
                  "ncols": 4,
                  "data": {
                      "header": "$loc UI_HERITAGE_GAMEMODE",
                      "title": "Elusive Targets",
                      "icon": "elusive",
                      "image": "$res images/hui/test2.jpg"
                  },
                  "actions": {
                      "accept": [
                          {
                              "call": {
                                  "onmenuframe": true,
                                  "method": "showBackground",
                                  "args": false
                              }
                          },
                          {
                              "set-selected": {
                                  "target": "career_tab"
                              }
                          },
                          {
                              "set-selected": {
                                  "target": "$loc UI_MENU_PAGE_HITS_ELEMENT_CATEGORY_Elusive_Target_Hits"
                              }
                          },
                          {
                              "trigger-input": {
                                  "action": "accept"
                              }
                          },
                          {
                              "call": {
                                  "onmenuframe": true,
                                  "method": "showBackground",
                                  "args": true
                              }
                          }
                      ],
                      "select": {
                          "replace-children": {
                              "target": "headline_container",
                              "children": [
                                  {
                                      "view": "menu3.basic.HeadlineElement",
                                      "selectable": false,
                                      "pressable": false,
                                      "data": {
                                          "header": "$loc UI_HERITAGE_GAMEMODE",
                                          "title": "Elusive Targets",
                                          "typeicon": "elusive"
                                      }
                                  }
                              ]
                          }
                      },
                      "deselect": {
                          "replace-children": {
                              "target": "headline_container",
                              "children": []
                          }
                      }
                  }
              },
              {
                "view": "menu3.basic.ItemTileSmall",
                "row": 0,
                "col": 8,
                "nrows": 1.5,
                "ncols": 2,
                "data": {
                    "header": "$loc UI_PEACOCK_POWERED_BY",
                    "title": "$loc UI_PEACOCK_BRANDING",
                    "icon": "fixed",
                    "image": "$res images/hui/peacocktest.jpg"
                },
                "actions": {
                    "accept": {
                        "open-url": {
                            "url": "https://thepeacockproject.org"
                        }
                    },
                    "select": {
                        "replace-children": {
                            "target": "headline_container",
                            "children": [
                                {
                                    "view": "menu3.basic.HeadlineElement",
                                    "selectable": false,
                                    "pressable": false,
                                    "data": {
                                        "header": "$loc UI_PEACOCK_POWERED_BY",
                                        "title": "$loc UI_PEACOCK_BRANDING",
                                        "typeicon": "fixed"
                                    }
                                }
                            ]
                        }
                    },
                    "deselect": {
                        "replace-children": {
                            "target": "headline_container",
                            "children": []
                        }
                    }
                }
            },
              {
                  "view": "menu3.basic.MenuTileTall",
                  "row": 0,
                  "col": 6,
                  "nrows": 3,
                  "ncols": 4,
                  "data": {
                      "header": "$loc UI_HERITAGE_GAMEMODE",
                      "title": "$loc UI_HERITAGE_ESC_TITLE",
                      "icon": "ESCALATION",
                      "image": "$res images/hui/test3.jpg"
                  },
                  "actions": {
                      "accept": [
                          {
                              "call": {
                                  "onmenuframe": true,
                                  "method": "showBackground",
                                  "args": false
                              }
                          },
                          {
                              "set-selected": {
                                  "target": "category_gamemodes"
                              }
                          },
                          {
                              "set-selected": {
                                  "target": "$loc UI_HERITAGE_ESC_TITLE"
                              }
                          },
                          {
                              "trigger-input": {
                                  "action": "accept"
                              }
                          },
                          {
                              "call": {
                                  "onmenuframe": true,
                                  "method": "showBackground",
                                  "args": true
                              }
                          }
                      ],
                      "select": {
                          "replace-children": {
                              "target": "headline_container",
                              "children": [
                                  {
                                      "view": "menu3.basic.HeadlineElement",
                                      "selectable": false,
                                      "pressable": false,
                                      "data": {
                                        "header": "$loc UI_HERITAGE_GAMEMODE",
                                        "title": "$loc UI_HERITAGE_ESC_TITLE",
                                          "typeicon": "ESCALATION"
                                      }
                                  }
                              ]
                          }
                      },
                      "deselect": {
                          "replace-children": {
                              "target": "headline_container",
                              "children": []
                          }
                      }
                  }
              },
              {
                  "$each": {
                      "in": {
                          "$arraysort": {
                              "source": "$.DashboardData",
                              "property": "Properties.DashboardCategory",
                              "order": [
                                  "Dashboard_Category_Elusive",
                                  "Dashboard_Category_Arcade",
                                  "Dashboard_Category_Escalation",
                                  "Dashboard_Category_Featured"
                              ]
                          }
                      },
                      "do": {
                          "$switch $.Properties.DashboardCategory": [
                              {
                                  "case": "Dashboard_Category_Elusive",
                                  "return": {
                                      "controller": "container",
                                      "row": 0,
                                      "col": 4,
                                      "nrows": 3,
                                      "ncols": 2,
                                      "usechilddimensions": true,
                                      "children": [
                                          {
                                              "$include": {
                                                  "$path": "menusystem/pages/hub/dashboard/category_elusive/loadasync.json"
                                              }
                                          }
                                      ]
                                  }
                              },
                              {
                                  "case": "Dashboard_Category_Escalation",
                                  "return": {
                                      "controller": "container",
                                      "row": 0,
                                      "col": 6,
                                      "nrows": 1.5,
                                      "ncols": 2,
                                      "usechilddimensions": true,
                                      "children": [
                                          {
                                              "$include": {
                                                  "$path": "menusystem/pages/hub/dashboard/category_escalation/loadasync.json"
                                              }
                                          }
                                      ]
                                  }
                              },
                              {
                                  "case": "Dashboard_Category_Featured",
                                  "return": {
                                      "controller": "container",
                                      "row": 1.5,
                                      "col": 6,
                                      "nrows": 1.5,
                                      "ncols": 2,
                                      "usechilddimensions": true,
                                      "children": [
                                          {
                                              "$include": {
                                                  "$path": "menusystem/pages/hub/dashboard/category_featured/loadasync.json"
                                              }
                                          }
                                      ]
                                  }
                              },
                              {
                                  "default": null
                              }
                          ]
                      }
                  }
              },
              {
                  "$each $.DashboardData": {
                      "$switch $.Properties.DashboardCategory": [
                          {
                              "case": "Dashboard_Category_Live",
                              "return": {
                                  "controller": "container",
                                  "row": 0,
                                  "col": 8,
                                  "nrows": 1.5,
                                  "ncols": 2,
                                  "children": [
                                      {
                                          "$include": {
                                              "$path": "menusystem/pages/hub/dashboard/category_live/livetiles.json"
                                          }
                                      }
                                  ]
                              }
                          },
                          {
                              "default": null
                          }
                      ]
                  }
              },
              {
                  "view": "menu3.basic.ItemTileSmall",
                  "row": 1.5,
                  "col": 8,
                  "nrows": 1.5,
                  "ncols": 2,
                  "data": {
                      "title": "$loc UI_DIALOG_LOAD_GAME",
                      "icon": "load",
                      "image": "$res images/ui/tiles/load_menu_tile.jpg"
                  },
                  "actions": {
                      "accept": {
                          "link": {
                              "page": "loadpage",
                              "args": {
                                  "url": "load",
                                  "args": {
                                      "saveorload": "load"
                                  },
                                  "saveorload": "load",
                                  "mainmenu": true,
                                  "reloadonchange": true
                              }
                          }
                      },
                      "select": {
                          "replace-children": {
                              "target": "headline_container",
                              "children": [
                                  {
                                      "view": "menu3.basic.HeadlineElement",
                                      "selectable": false,
                                      "pressable": false,
                                      "data": {
                                          "header": "",
                                          "title": "$loc UI_DIALOG_LOAD_GAME",
                                          "typeicon": "load"
                                      }
                                  }
                              ]
                          }
                      },
                      "deselect": {
                          "replace-children": {
                              "target": "headline_container",
                              "children": []
                          }
                      }
                  }
              }
          ]
      }
  }
  
  }