TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 80,
  "partial": false,
  "mapLocations": [
   {
    "x": 457.7,
    "map": {
     "maximumZoomFactor": 1.2,
     "fieldOfViewOverlayInsideColor": "#FFFFFF",
     "width": 578,
     "id": "map_B04F92F4_BD2B_5A92_41E3_DE6616E9FEBF",
     "height": 303,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 303,
        "width": 578,
        "url": "media/map_B04F92F4_BD2B_5A92_41E3_DE6616E9FEBF.png",
        "class": "ImageResourceLevel"
       },
       {
        "height": 151,
        "width": 289,
        "url": "media/map_B04F92F4_BD2B_5A92_41E3_DE6616E9FEBF_lq.png",
        "grayscale": true,
        "class": "ImageResourceLevel"
       }
      ]
     },
     "thumbnailUrl": "media/map_B04F92F4_BD2B_5A92_41E3_DE6616E9FEBF_t.png",
     "fieldOfViewOverlayRadiusScale": 0.12,
     "overlays": [
      {
       "id": "overlay_B04FB2F4_BD2B_5A92_41C8_036C7735F70D",
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "image": {
        "x": 30.6,
        "y": 158.65,
        "width": 68.35,
        "class": "HotspotMapOverlayImage",
        "height": 31.01,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 31,
           "width": 68,
           "url": "media/map_B04F92F4_BD2B_5A92_41E3_DE6616E9FEBF_HS_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "map": {
        "offsetY": 0,
        "x": 30.6,
        "width": 68.35,
        "class": "HotspotMapOverlayMap",
        "height": 31.01,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 35,
           "url": "media/map_B04F92F4_BD2B_5A92_41E3_DE6616E9FEBF_HS_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "y": 158.65
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 4)",
         "class": "HotspotMapOverlayArea"
        }
       ]
      },
      {
       "id": "overlay_B04FC2F5_BD2B_5A92_41D2_2F916240A82E",
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "image": {
        "x": 429.05,
        "y": 27.5,
        "width": 57.3,
        "class": "HotspotMapOverlayImage",
        "height": 34.03,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 34,
           "width": 57,
           "url": "media/map_B04F92F4_BD2B_5A92_41E3_DE6616E9FEBF_HS_1.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "map": {
        "offsetY": 0,
        "x": 429.05,
        "width": 57.3,
        "class": "HotspotMapOverlayMap",
        "height": 34.03,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 26,
           "url": "media/map_B04F92F4_BD2B_5A92_41E3_DE6616E9FEBF_HS_1_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "y": 27.5
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "class": "HotspotMapOverlayArea"
        }
       ]
      },
      {
       "id": "overlay_B04F02F5_BD2B_5A92_41E0_75D03AAAE025",
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "image": {
        "x": 477.9,
        "y": 240.9,
        "width": 33,
        "class": "HotspotMapOverlayImage",
        "height": 36.91,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "width": 33,
           "url": "media/map_B04F92F4_BD2B_5A92_41E3_DE6616E9FEBF_HS_4.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "map": {
        "offsetY": 0,
        "x": 477.9,
        "width": 33,
        "class": "HotspotMapOverlayMap",
        "height": 36.91,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 17,
           "width": 16,
           "url": "media/map_B04F92F4_BD2B_5A92_41E3_DE6616E9FEBF_HS_4_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "y": 240.9
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "class": "HotspotMapOverlayArea"
        }
       ]
      },
      {
       "id": "overlay_B04419C9_BD24_D6F2_41D6_8123BD743C3F",
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "image": {
        "x": 525,
        "y": 15,
        "width": 28,
        "class": "HotspotMapOverlayImage",
        "height": 32,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 32,
           "width": 28,
           "url": "media/map_B04F92F4_BD2B_5A92_41E3_DE6616E9FEBF_HS_5.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "map": {
        "offsetY": 0,
        "x": 525,
        "width": 28,
        "class": "HotspotMapOverlayMap",
        "height": 32,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 14,
           "url": "media/map_B04F92F4_BD2B_5A92_41E3_DE6616E9FEBF_HS_5_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "y": 15
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "class": "HotspotMapOverlayArea"
        }
       ]
      }
     ],
     "label": "floorplan",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "scaleMode": "fit_inside",
     "minimumZoomFactor": 0.5,
     "class": "Map",
     "fieldOfViewOverlayOutsideColor": "#00CC33",
     "fieldOfViewOverlayInsideOpacity": 0.65,
     "initialZoomFactor": 1
    },
    "y": 44.52,
    "angle": 296.74,
    "class": "PanoramaMapLocation"
   }
  ],
  "id": "panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650",
  "thumbnailUrl": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_t.jpg",
  "pitch": 0,
  "label": "lobby-full",
  "frames": [
   {
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 7000,
       "width": 7000,
       "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 4998,
       "width": 4998,
       "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "yaw": 25.75,
      "bleaching": 0.79,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_AB150727_A763_0A85_41BC_8F9290B02679",
      "bleachingDistance": 0.32,
      "pitch": 20.41
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_BB9B3EBF_B74C_8789_41D8_DD7A4D82A0BF",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 15,
           "width": 18,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -117.05,
        "hfov": 6.33,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.56
       }
      ],
      "items": [
       {
        "yaw": -117.05,
        "hfov": 6.33,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 107,
           "width": 123,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 0.56
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_BB9BDEBF_B74C_8789_41D1_B65F9AEE330F",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 15,
           "width": 16,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -136.85,
        "hfov": 20.27,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 4.66
       }
      ],
      "items": [
       {
        "yaw": -136.85,
        "hfov": 20.27,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 389,
           "width": 395,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 4.66
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_BB9B2EBF_B74C_8789_41DF_0381927DD3E3",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 15,
           "width": 21,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -81.73,
        "hfov": 11.26,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 2.44
       }
      ],
      "items": [
       {
        "yaw": -81.73,
        "hfov": 11.26,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 161,
           "width": 219,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 2.44
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_B9C52C9E_B744_8B8B_41B1_817653C65842",
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 17,
           "width": 16,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -117.06,
        "hfov": 6.49,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.39
       }
      ],
      "items": [
       {
        "yaw": -117.06,
        "hfov": 6.49,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "width": 126,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 0.39
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_B9FA79E2_B74C_8DBB_41E2_65CD989EBC0F",
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 23,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -81.66,
        "hfov": 12.83,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 2.46
       }
      ],
      "items": [
       {
        "yaw": -81.66,
        "hfov": 12.83,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 167,
           "width": 249,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 2.46
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_BA6E7428_B743_BAB7_41E1_DC0A2DDE2BFB",
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 15,
           "width": 25,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -137.25,
        "hfov": 21.04,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 4.71
       }
      ],
      "items": [
       {
        "yaw": -137.25,
        "hfov": 21.04,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 253,
           "width": 410,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 4.71
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_t.jpg"
   }
  ],
  "class": "Panorama",
  "hfovMin": 80,
  "vfov": 180,
  "hfov": 360
 },
 {
  "touchControlMode": "drag_rotation",
  "gyroscopeEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": false,
  "class": "PanoramaPlayer",
  "buttonCardboardView": {
   "paddingRight": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "borderRadius": 0,
   "paddingLeft": 0,
   "width": "100%",
   "borderSize": 0,
   "height": "100%",
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "minHeight": 1,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_A7C2E859_B794_03F3_41D8_C81477FDCCC7",
   "transparencyActive": true,
   "iconURL": "skin/IconButton_A7C2E859_B794_03F3_41D8_C81477FDCCC7.png",
   "backgroundOpacity": 0,
   "paddingTop": 0,
   "minWidth": 1,
   "maxWidth": 49,
   "maxHeight": 36
  },
  "preloadEnabled": false,
  "mouseControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true
 },
 {
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "class": "MapPlayer",
  "viewerArea": "this.MapViewer"
 },
 {
  "id": "panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_camera",
  "automaticRotationSpeed": 1,
  "manualRotationSpeed": 1313,
  "automaticZoomSpeed": 1,
  "initialPosition": {
   "hfov": 80,
   "yaw": -28.09,
   "class": "PanoramaCameraPosition",
   "pitch": -1.98
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 80,
  "partial": false,
  "id": "panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48",
  "thumbnailUrl": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_t.jpg",
  "pitch": 0,
  "label": "hallway_full",
  "frames": [
   {
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 7000,
       "width": 7000,
       "url": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 4998,
       "width": 4998,
       "url": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "yaw": -65.69,
      "bleaching": 0.38,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_B3E49212_A7AF_0A9F_41D5_FADC92F3471C",
      "bleachingDistance": 0.4,
      "pitch": 63.62
     },
     {
      "yaw": -9.92,
      "bleaching": 0.02,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_B381DA48_A7AF_1A8C_41B0_44C4B2A668FE",
      "bleachingDistance": 0.4,
      "pitch": 26.44
     },
     {
      "yaw": 19.72,
      "bleaching": 0.1,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_B3AF0088_A7AD_078C_41B3_14EB36B338B1",
      "bleachingDistance": 0.4,
      "pitch": 26.19
     },
     {
      "yaw": 175.23,
      "bleaching": 0.05,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_B34A46E6_A7AD_0B84_41E3_D8C4F19A1029",
      "bleachingDistance": 0.4,
      "pitch": 28.95
     },
     {
      "yaw": -155.13,
      "bleaching": 0.26,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_B36E488A_A7AD_078C_41B3_5835C1849A2D",
      "bleachingDistance": 0.4,
      "pitch": 27.19
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_BA12907C_B794_03B1_41C5_9A9CACF5FD05",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 25,
           "url": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -47.1,
        "hfov": 23.5,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.73
       }
      ],
      "items": [
       {
        "yaw": -47.1,
        "hfov": 23.5,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 283,
           "width": 459,
           "url": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.73
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_BA12707C_B794_03B1_41BB_E2BACD75EED8",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 27,
           "url": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -135.25,
        "hfov": 22.4,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -4.78
       }
      ],
      "items": [
       {
        "yaw": -135.25,
        "hfov": 22.4,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 256,
           "width": 437,
           "url": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -4.78
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_BA12407C_B794_03B1_41DF_DBD496454955",
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 28,
           "url": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -135.1,
        "hfov": 23.38,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -4.8
       }
      ],
      "items": [
       {
        "yaw": -135.1,
        "hfov": 23.38,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 260,
           "width": 456,
           "url": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -4.8
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_BA12607C_B794_03B1_41DA_EC9521C78F7A",
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 24,
           "url": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -47.25,
        "hfov": 24.08,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.64
       }
      ],
      "items": [
       {
        "yaw": -47.25,
        "hfov": 24.08,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 306,
           "width": 470,
           "url": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.64
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_t.jpg"
   }
  ],
  "class": "Panorama",
  "hfovMin": 80,
  "vfov": 180,
  "hfov": 360
 },
 {
  "id": "panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_camera",
  "automaticRotationSpeed": 1,
  "manualRotationSpeed": 1320,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 80,
   "yaw": -138.06,
   "class": "PanoramaCameraPosition",
   "pitch": -5.49
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 80,
  "partial": false,
  "id": "panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085",
  "thumbnailUrl": "media/panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_t.jpg",
  "pitch": 0,
  "label": "Suite_2_v3-stereo",
  "frames": [
   {
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 7000,
       "width": 7000,
       "url": "media/panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 4998,
       "width": 4998,
       "url": "media/panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_BABC94CD_B794_0CD3_41DE_7B573D88F5F9",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 26,
           "url": "media/panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -170.32,
        "hfov": 17.33,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 2.69
       }
      ],
      "items": [
       {
        "yaw": -170.32,
        "hfov": 17.33,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "width": 337,
           "url": "media/panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 2.69
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_BABCB4CD_B794_0CD3_41B8_261B469655C1",
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 30,
           "url": "media/panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -170.53,
        "hfov": 20.78,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 2.71
       }
      ],
      "items": [
       {
        "yaw": -170.53,
        "hfov": 20.78,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 209,
           "width": 404,
           "url": "media/panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 2.71
       }
      ]
     },
     {
      "yaw": 77,
      "bleaching": 0.7,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_A14F9951_B1E5_6BCC_41CE_B6BB0AAC4AA5",
      "bleachingDistance": 0.4,
      "pitch": 5.34
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_t.jpg"
   }
  ],
  "class": "Panorama",
  "hfovMin": 80,
  "vfov": 180,
  "hfov": 360
 },
 {
  "id": "panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_camera",
  "automaticRotationSpeed": 1,
  "manualRotationSpeed": 1400,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 80,
   "yaw": 158.09,
   "class": "PanoramaCameraPosition",
   "pitch": -3.11
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 80,
  "partial": false,
  "mapLocations": [
   {
    "x": 509.9,
    "map": "this.map_B04F92F4_BD2B_5A92_41E3_DE6616E9FEBF",
    "y": 261.86,
    "angle": 62.18,
    "class": "PanoramaMapLocation"
   }
  ],
  "id": "panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D",
  "thumbnailUrl": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_t.jpg",
  "pitch": 0,
  "label": "Color-suitev3-stereo",
  "frames": [
   {
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 7000,
       "width": 7000,
       "url": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 4998,
       "width": 4998,
       "url": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_BB22575E_B77C_0DF1_41DC_517A5CCD9E82",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 25,
           "url": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -98.25,
        "hfov": 17.89,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 3.19
       }
      ],
      "items": [
       {
        "yaw": -98.25,
        "hfov": 17.89,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 220,
           "width": 348,
           "url": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 3.19
       }
      ]
     },
     {
      "yaw": 16.96,
      "bleaching": 0.47,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_A1A73A9E_B1E2_E974_41D8_00147E12613E",
      "bleachingDistance": 0.71,
      "pitch": 9.36
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_BB22675E_B77C_0DF1_4184_FD11C0A426E4",
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 27,
           "url": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -98.18,
        "hfov": 19.96,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 3.22
       }
      ],
      "items": [
       {
        "yaw": -98.18,
        "hfov": 19.96,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 223,
           "width": 388,
           "url": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 3.22
       }
      ]
     },
     {
      "id": "overlay_AF6361A0_BD24_D6B2_41C4_B1AB8CC11909",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.showPopupMedia(this.window_A95D4CC3_BD2B_AEF6_41B2_30C99565EA8F, this.video_AD4B26A3_BD3D_DAB6_41DE_DA012EC209BD, this.playList_A810CDF6_BD25_AE9F_41D8_DB80BABE61C0, '90%', '90%', true, true); this.playList_A810CDF6_BD25_AE9F_41D8_DB80BABE61C0.set('selectedIndex', 0); ; this.viewer_uidA8124DF7_BD25_AE9E_41D5_0BCBF4B40E84VideoPlayer.play(); ",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 127,
           "width": 200,
           "url": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -58.63,
        "hfov": 24.52,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.3
       }
      ],
      "items": [
       {
        "yaw": -58.63,
        "hfov": 24.52,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 305,
           "width": 478,
           "url": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.3
       }
      ]
     },
     {
      "id": "overlay_AB00900A_BD6C_B576_41C8_83551DC02195",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.showPopupMedia(this.window_ABAFFF3B_BD7B_AB96_41D9_593F4A4B3D27, this.video_AD4B26A3_BD3D_DAB6_41DE_DA012EC209BD, this.playList_AA65176A_BD7C_BBB6_41E1_9F0BC456B274, '90%', '90%', false, true); this.playList_AA65176A_BD7C_BBB6_41E1_9F0BC456B274.set('selectedIndex', 0); ; this.viewer_uidAA65776A_BD7C_BBB6_41D6_D1F1B5BEE9D5VideoPlayer.play(); ",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 73,
           "width": 73,
           "url": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -58.91,
        "hfov": 7.52,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -4.21
       }
      ],
      "items": [
       {
        "yaw": -58.91,
        "hfov": 7.52,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 146,
           "width": 146,
           "url": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -4.21
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_t.jpg"
   }
  ],
  "class": "Panorama",
  "hfovMin": 80,
  "vfov": 180,
  "hfov": 360
 },
 {
  "id": "panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_camera",
  "automaticRotationSpeed": 1,
  "manualRotationSpeed": 1400,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 80,
   "yaw": -60.22,
   "class": "PanoramaCameraPosition",
   "pitch": -7.83
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "partial": false,
  "id": "panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA",
  "mapLocations": [
   {
    "x": 64.78,
    "map": "this.map_B04F92F4_BD2B_5A92_41E3_DE6616E9FEBF",
    "y": 174.15,
    "angle": 140.13,
    "class": "PanoramaMapLocation"
   }
  ],
  "thumbnailUrl": "media/panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_t.jpg",
  "pitch": 0,
  "label": "conference_room_v4-stereo",
  "frames": [
   {
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 7000,
       "width": 7000,
       "url": "media/panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 3217,
       "width": 3217,
       "url": "media/panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_BAD285C7_B78C_0CDF_41D3_F8A890E0423B",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 24,
           "url": "media/panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -28.38,
        "hfov": 20.36,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.2
       }
      ],
      "items": [
       {
        "yaw": -28.38,
        "hfov": 20.36,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 264,
           "width": 396,
           "url": "media/panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -1.2
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_B91855B6_B78C_0CB1_41CF_206548700816",
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 25,
           "url": "media/panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -28.73,
        "hfov": 22.22,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.22
       }
      ],
      "items": [
       {
        "yaw": -28.73,
        "hfov": 22.22,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 271,
           "width": 432,
           "url": "media/panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -1.22
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_t.jpg"
   }
  ],
  "class": "Panorama",
  "hfovMin": 60,
  "vfov": 180,
  "hfov": 360
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMin": 60,
  "partial": false,
  "video": [
   {
    "posterURL": "media/media_A895AFF0_BD65_AA92_419C_534D76AF9DFA_poster.jpg",
    "type": "video/mp4",
    "width": 1920,
    "url": "media/media_A895AFF0_BD65_AA92_419C_534D76AF9DFA.mp4",
    "class": "Video360Resource",
    "height": 1080,
    "bitrate": 3576,
    "framerate": 23.98
   }
  ],
  "id": "media_A895AFF0_BD65_AA92_419C_534D76AF9DFA",
  "loop": false,
  "thumbnailUrl": "media/media_A895AFF0_BD65_AA92_419C_534D76AF9DFA_t.jpg",
  "pitch": 0,
  "label": "y2mate.com - luxury_cruisin_im_on_a_yacht_rNf1ywnzzTI_1080p",
  "hfov": 360,
  "class": "Video360",
  "vfov": 180,
  "hfovMax": 140
 },
 {
  "id": "media_A895AFF0_BD65_AA92_419C_534D76AF9DFA_camera",
  "automaticRotationSpeed": 10,
  "manualRotationSpeed": 1800,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 120,
   "yaw": 0,
   "class": "RotationalCameraPosition",
   "pitch": 0
  },
  "manualZoomSpeed": 1,
  "class": "RotationalCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_AA3BB597_BD7F_BE9E_41DE_BCE0BF9452D0",
    "media": "this.panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650",
    "class": "PanoramaPlayListItem",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AA3BB597_BD7F_BE9E_41DE_BCE0BF9452D0, this.MapViewerMapPlayer)",
    "camera": "this.panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "id": "PanoramaPlayListItem_AA38D59E_BD7F_BE8E_41DB_400A3B6008FD",
    "media": "this.panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D",
    "class": "PanoramaPlayListItem",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AA38D59E_BD7F_BE8E_41DB_400A3B6008FD, this.MapViewerMapPlayer)",
    "camera": "this.panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "id": "PanoramaPlayListItem_AA38859E_BD7F_BE8E_41C2_1DD574B498DB",
    "media": "this.panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA",
    "class": "PanoramaPlayListItem",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AA38859E_BD7F_BE8E_41C2_1DD574B498DB, this.MapViewerMapPlayer)",
    "camera": "this.panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.media_A895AFF0_BD65_AA92_419C_534D76AF9DFA",
    "class": "Video360PlayListItem",
    "camera": "this.media_A895AFF0_BD65_AA92_419C_534D76AF9DFA_camera",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 0)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 5, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 5, this.media_A895AFF0_BD65_AA92_419C_534D76AF9DFA)"
   }
  ]
 },
 {
  "label": "I'm on a Yacht",
  "thumbnailUrl": "media/video_AD4B26A3_BD3D_DAB6_41DE_DA012EC209BD_t.jpg",
  "width": 1920,
  "id": "video_AD4B26A3_BD3D_DAB6_41DE_DA012EC209BD",
  "class": "Video",
  "video": {
   "height": 1080,
   "width": 1920,
   "mp4Url": "media/video_AD4B26A3_BD3D_DAB6_41DE_DA012EC209BD.mp4",
   "class": "VideoResource"
  },
  "height": 1080,
  "scaleMode": "fit_inside",
  "loop": false
 },
 {
  "id": "playList_A810CDF6_BD25_AE9F_41D8_DB80BABE61C0",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "displayPlaybackBar": true,
     "id": "viewer_uidA8124DF7_BD25_AE9E_41D5_0BCBF4B40E84VideoPlayer",
     "class": "VideoPlayer",
     "viewerArea": {
      "playbackBarHeight": 20,
      "progressBackgroundColor": [
       "#000000"
      ],
      "paddingRight": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "progressLeft": 10,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipFontColor": "#606060",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarProgressOpacity": 1,
      "toolTipBorderSize": 1,
      "toolTipPaddingBottom": 4,
      "playbackBarBorderSize": 2,
      "toolTipBorderColor": "#767676",
      "progressBottom": 2,
      "progressBarOpacity": 1,
      "shadow": false,
      "toolTipTextShadowBlurRadius": 3,
      "progressRight": 10,
      "transitionMode": "blending",
      "progressOpacity": 1,
      "playbackBarHeadBorderColor": "#000000",
      "paddingBottom": 0,
      "progressBackgroundColorRatios": [
       1
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadHeight": 30,
      "progressBarBorderSize": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "paddingTop": 0,
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderRadius": 4,
      "playbackBarLeft": 0,
      "progressBackgroundOpacity": 1,
      "toolTipOpacity": 1,
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "playbackBarHeadWidth": 6,
      "progressBarBackgroundColorRatios": [
       1
      ],
      "progressHeight": 10,
      "progressBarBorderColor": "#000000",
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowSpread": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "playbackBarHeadShadow": true,
      "playbackBarBottom": 0,
      "toolTipFontStyle": "normal",
      "borderRadius": 0,
      "paddingLeft": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "toolTipBorderRadius": 3,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#AAAAAA",
      "playbackBarOpacity": 1,
      "progressBarBackgroundColor": [
       "#FF0000"
      ],
      "toolTipShadowOpacity": 1,
      "width": "100%",
      "borderSize": 0,
      "height": "100%",
      "class": "ViewerArea",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipFontFamily": "Arial",
      "minHeight": 50,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderRadius": 4,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadBorderSize": 0,
      "toolTipPaddingLeft": 6,
      "id": "viewer_uidAAB4F58D_BD7F_BF72_41C4_151A0C877E1E",
      "playbackBarHeadBorderRadius": 0,
      "toolTipPaddingRight": 6,
      "toolTipShadowColor": "#333333",
      "minWidth": 100,
      "progressBorderRadius": 4,
      "toolTipTextShadowColor": "#000000",
      "playbackBarProgressBorderColor": "#000000",
      "toolTipShadowBlurRadius": 3,
      "toolTipFontWeight": "normal",
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "toolTipFontSize": 12
     }
    },
    "media": "this.video_AD4B26A3_BD3D_DAB6_41DE_DA012EC209BD",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidA8124DF7_BD25_AE9E_41D5_0BCBF4B40E84VideoPlayer)",
    "end": "this.setComponentVisibility(this.Image_BA7BB2B4_B1ED_FEB4_41C3_987DE346C922, false, -1, this.effect_A860F3DD_BD5D_7A92_41E5_F07E7EF1BCD9, 'hideEffect', false); this.setComponentVisibility(this.Image_BA7BB2B4_B1ED_FEB4_41C3_987DE346C922, false, -1, this.effect_A860F3DD_BD5D_7A92_41E5_F07E7EF1BCD9, 'hideEffect', false); this.setComponentVisibility(this.IconButton_A7C2E859_B794_03F3_41D8_C81477FDCCC7, false, -1, this.effect_A860E3DE_BD5D_7A8E_41D4_0205D9618925, 'hideEffect', false); this.setComponentVisibility(this.IconButton_A7C2E859_B794_03F3_41D8_C81477FDCCC7, false, -1, this.effect_A860E3DE_BD5D_7A8E_41D4_0205D9618925, 'hideEffect', false)",
    "start": "this.viewer_uidA8124DF7_BD25_AE9E_41D5_0BCBF4B40E84VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.playList_A810CDF6_BD25_AE9F_41D8_DB80BABE61C0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_A810CDF6_BD25_AE9F_41D8_DB80BABE61C0, 0, this.video_AD4B26A3_BD3D_DAB6_41DE_DA012EC209BD)"
   }
  ]
 },
 {
  "id": "playList_AA65176A_BD7C_BBB6_41E1_9F0BC456B274",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "displayPlaybackBar": true,
     "id": "viewer_uidAA65776A_BD7C_BBB6_41D6_D1F1B5BEE9D5VideoPlayer",
     "class": "VideoPlayer",
     "viewerArea": {
      "playbackBarHeight": 20,
      "progressBackgroundColor": [
       "#000000"
      ],
      "paddingRight": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "progressLeft": 10,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipFontColor": "#606060",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarProgressOpacity": 1,
      "toolTipBorderSize": 1,
      "toolTipPaddingBottom": 4,
      "playbackBarBorderSize": 2,
      "toolTipBorderColor": "#767676",
      "progressBottom": 2,
      "progressBarOpacity": 1,
      "shadow": false,
      "toolTipTextShadowBlurRadius": 3,
      "progressRight": 10,
      "transitionMode": "blending",
      "progressOpacity": 1,
      "playbackBarHeadBorderColor": "#000000",
      "paddingBottom": 0,
      "progressBackgroundColorRatios": [
       1
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadHeight": 30,
      "progressBarBorderSize": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "paddingTop": 0,
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderRadius": 4,
      "playbackBarLeft": 0,
      "progressBackgroundOpacity": 1,
      "toolTipOpacity": 1,
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "playbackBarHeadWidth": 6,
      "progressBarBackgroundColorRatios": [
       1
      ],
      "progressHeight": 10,
      "progressBarBorderColor": "#000000",
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowSpread": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "playbackBarHeadShadow": true,
      "playbackBarBottom": 0,
      "toolTipFontStyle": "normal",
      "borderRadius": 0,
      "paddingLeft": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "toolTipBorderRadius": 3,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#AAAAAA",
      "playbackBarOpacity": 1,
      "progressBarBackgroundColor": [
       "#FF0000"
      ],
      "toolTipShadowOpacity": 1,
      "width": "100%",
      "borderSize": 0,
      "height": "100%",
      "class": "ViewerArea",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipFontFamily": "Arial",
      "minHeight": 50,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderRadius": 4,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadBorderSize": 0,
      "toolTipPaddingLeft": 6,
      "id": "viewer_uidAAB4958E_BD7F_BE8E_419D_6AEDC23E2531",
      "playbackBarHeadBorderRadius": 0,
      "toolTipPaddingRight": 6,
      "toolTipShadowColor": "#333333",
      "minWidth": 100,
      "progressBorderRadius": 4,
      "toolTipTextShadowColor": "#000000",
      "playbackBarProgressBorderColor": "#000000",
      "toolTipShadowBlurRadius": 3,
      "toolTipFontWeight": "normal",
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "toolTipFontSize": 12
     }
    },
    "media": "this.video_AD4B26A3_BD3D_DAB6_41DE_DA012EC209BD",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidAA65776A_BD7C_BBB6_41D6_D1F1B5BEE9D5VideoPlayer)",
    "end": "this.setComponentVisibility(this.Image_BA7BB2B4_B1ED_FEB4_41C3_987DE346C922, false, -1, this.effect_A860F3DD_BD5D_7A92_41E5_F07E7EF1BCD9, 'hideEffect', false); this.setComponentVisibility(this.Image_BA7BB2B4_B1ED_FEB4_41C3_987DE346C922, false, -1, this.effect_A860F3DD_BD5D_7A92_41E5_F07E7EF1BCD9, 'hideEffect', false); this.setComponentVisibility(this.IconButton_A7C2E859_B794_03F3_41D8_C81477FDCCC7, false, -1, this.effect_A860E3DE_BD5D_7A8E_41D4_0205D9618925, 'hideEffect', false); this.setComponentVisibility(this.IconButton_A7C2E859_B794_03F3_41D8_C81477FDCCC7, false, -1, this.effect_A860E3DE_BD5D_7A8E_41D4_0205D9618925, 'hideEffect', false)",
    "start": "this.viewer_uidAA65776A_BD7C_BBB6_41D6_D1F1B5BEE9D5VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.playList_AA65176A_BD7C_BBB6_41E1_9F0BC456B274, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_AA65176A_BD7C_BBB6_41E1_9F0BC456B274, 0, this.video_AD4B26A3_BD3D_DAB6_41DE_DA012EC209BD)"
   }
  ]
 },
 "this.map_B04F92F4_BD2B_5A92_41E3_DE6616E9FEBF",
 {
  "id": "playList_AA3B5596_BD7F_BE9E_41DF_F02ED35983A0",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B04F92F4_BD2B_5A92_41E3_DE6616E9FEBF",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 {
  "closeButtonPaddingTop": 0,
  "titlePaddingTop": 5,
  "titlePaddingBottom": 5,
  "headerBorderSize": 0,
  "paddingRight": 0,
  "bodyBackgroundOpacity": 0,
  "overflow": "scroll",
  "closeButtonPaddingLeft": 0,
  "backgroundColor": [],
  "modal": true,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "headerPaddingBottom": 5,
  "scrollBarMargin": 2,
  "closeButtonPressedIconLineWidth": 3,
  "headerPaddingRight": 0,
  "headerBorderColor": "#000000",
  "gap": 10,
  "closeButtonPaddingRight": 0,
  "title": "",
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "bodyPaddingRight": 0,
  "horizontalAlign": "center",
  "shadow": false,
  "scrollBarWidth": 10,
  "bodyPaddingBottom": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontColor": "#000000",
  "scrollBarColor": "#000000",
  "bodyBorderColor": "#000000",
  "closeButtonBackgroundColor": [],
  "scrollBarOpacity": 0.5,
  "closeButtonBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 1,
  "closeButtonPressedIconColor": "#FFFFFF",
  "titleTextDecoration": "none",
  "footerBorderSize": 0,
  "backgroundColorDirection": "vertical",
  "titleFontSize": 14,
  "footerBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "closeButtonBackgroundOpacity": 1,
  "titlePaddingRight": 5,
  "closeButtonBackgroundColorRatios": [],
  "titleFontWeight": "normal",
  "children": [
   "this.viewer_uidAAB4F58D_BD7F_BF72_41C4_151A0C877E1E"
  ],
  "bodyBorderSize": 0,
  "titleFontFamily": "Arial",
  "closeButtonBorderColor": "#000000",
  "bodyPaddingTop": 0,
  "borderRadius": 5,
  "closeButtonRollOverBackgroundColor": [],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "paddingLeft": 0,
  "headerVerticalAlign": "middle",
  "closeButtonBorderRadius": 11,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundOpacity": 0,
  "closeButtonPaddingBottom": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "borderSize": 0,
  "class": "Window",
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "footerHeight": 5,
  "footerBorderColor": "#000000",
  "minHeight": 20,
  "headerBackgroundOpacity": 0,
  "headerBackgroundColorDirection": "vertical",
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyPaddingLeft": 0,
  "closeButtonIconWidth": 20,
  "veilColorRatios": [
   0,
   1
  ],
  "bodyBackgroundColorDirection": "vertical",
  "close": "this.playList_A810CDF6_BD25_AE9F_41D8_DB80BABE61C0.set('selectedIndex', -1);",
  "veilColorDirection": "horizontal",
  "closeButtonBorderSize": 0,
  "closeButtonIconHeight": 20,
  "id": "window_A95D4CC3_BD2B_AEF6_41B2_30C99565EA8F",
  "veilOpacity": 0,
  "contentOpaque": false,
  "closeButtonIconLineWidth": 2,
  "closeButtonIconColor": "#CC3300",
  "headerPaddingLeft": 10,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "titlePaddingLeft": 5,
  "titleFontStyle": "normal",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "layout": "vertical",
  "minWidth": 20,
  "headerPaddingTop": 10,
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColor": [],
  "verticalAlign": "middle"
 },
 {
  "closeButtonPressedBackgroundColor": [],
  "titlePaddingTop": 5,
  "titlePaddingBottom": 5,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "paddingRight": 0,
  "bodyBackgroundOpacity": 0,
  "overflow": "scroll",
  "backgroundColor": [],
  "modal": true,
  "shadowBlurRadius": 6,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "shadowHorizontalLength": 3,
  "scrollBarMargin": 2,
  "closeButtonPressedIconLineWidth": 3,
  "headerPaddingRight": 0,
  "headerBorderColor": "#000000",
  "gap": 10,
  "title": "",
  "headerBorderSize": 0,
  "bodyPaddingRight": 0,
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "horizontalAlign": "center",
  "shadow": true,
  "scrollBarWidth": 10,
  "bodyPaddingBottom": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "shadowSpread": 1,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontColor": "#000000",
  "scrollBarColor": "#000000",
  "closeButtonBackgroundColor": [],
  "shadowColor": "#000000",
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 1,
  "closeButtonPressedIconColor": "#FFFFFF",
  "scrollBarOpacity": 0.5,
  "shadowVerticalLength": 0,
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "titleTextDecoration": "none",
  "titleFontSize": 14,
  "footerBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "closeButtonBackgroundColorRatios": [],
  "titleFontWeight": "normal",
  "children": [
   "this.viewer_uidAAB4958E_BD7F_BE8E_419D_6AEDC23E2531"
  ],
  "titleFontFamily": "Arial",
  "bodyPaddingTop": 0,
  "closeButtonRollOverBackgroundColor": [],
  "borderRadius": 5,
  "paddingLeft": 0,
  "headerVerticalAlign": "middle",
  "closeButtonBorderRadius": 11,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundOpacity": 0,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "borderSize": 0,
  "minHeight": 20,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "footerHeight": 5,
  "shadowOpacity": 0.5,
  "headerBackgroundOpacity": 0,
  "headerBackgroundColorDirection": "vertical",
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyPaddingLeft": 0,
  "closeButtonIconWidth": 20,
  "class": "Window",
  "bodyBackgroundColorDirection": "vertical",
  "close": "this.playList_AA65176A_BD7C_BBB6_41E1_9F0BC456B274.set('selectedIndex', -1);",
  "veilColorDirection": "horizontal",
  "closeButtonIconHeight": 20,
  "id": "window_ABAFFF3B_BD7B_AB96_41D9_593F4A4B3D27",
  "veilOpacity": 0.4,
  "contentOpaque": false,
  "closeButtonIconLineWidth": 2,
  "closeButtonIconColor": "#B2B2B2",
  "headerPaddingLeft": 10,
  "veilColorRatios": [
   0,
   1
  ],
  "minWidth": 20,
  "titlePaddingLeft": 5,
  "titleFontStyle": "normal",
  "layout": "vertical",
  "headerPaddingBottom": 5,
  "backgroundColorRatios": [],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "verticalAlign": "middle",
  "headerPaddingTop": 10
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_A860F3DD_BD5D_7A92_41E5_F07E7EF1BCD9",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_A860E3DE_BD5D_7A8E_41D4_0205D9618925",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 "this.effect_A860F3DD_BD5D_7A92_41E5_F07E7EF1BCD9",
 "this.effect_A860E3DE_BD5D_7A8E_41D4_0205D9618925"
], "children": [
 {
  "playbackBarHeight": 20,
  "progressBackgroundColor": [
   "#000000"
  ],
  "paddingRight": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "progressLeft": 10,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipFontColor": "#606060",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipBorderSize": 1,
  "toolTipPaddingBottom": 4,
  "playbackBarBorderSize": 2,
  "toolTipBorderColor": "#767676",
  "progressBottom": 1,
  "progressBarOpacity": 1,
  "shadow": false,
  "toolTipTextShadowBlurRadius": 3,
  "progressRight": 10,
  "transitionMode": "blending",
  "progressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "paddingBottom": 0,
  "progressBackgroundColorRatios": [
   1
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingTop": 4,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadHeight": 30,
  "progressBarBorderSize": 0,
  "toolTipShadowVerticalLength": 0,
  "progressHeight": 10,
  "toolTipTextShadowOpacity": 0,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "playbackBarLeft": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "toolTipOpacity": 1,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "maxHeight": 3840,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   1
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "playbackBarHeadOpacity": 1,
  "maxWidth": 3840,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowSpread": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "progressBorderSize": 0,
  "playbackBarHeadShadow": true,
  "playbackBarBottom": 10,
  "toolTipFontStyle": "normal",
  "borderRadius": 0,
  "paddingLeft": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#AAAAAA",
  "playbackBarOpacity": 1,
  "progressBarBackgroundColor": [
   "#FF0000"
  ],
  "toolTipShadowOpacity": 1,
  "borderSize": 0,
  "height": "100%",
  "minHeight": 50,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipFontFamily": "Arial",
  "class": "ViewerArea",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderRadius": 4,
  "top": "0%",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "id": "MainViewer",
  "playbackBarHeadShadowColor": "#000000",
  "toolTipPaddingRight": 6,
  "toolTipShadowColor": "#333333",
  "minWidth": 50,
  "progressBorderRadius": 4,
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontWeight": "normal",
  "right": "0%",
  "playbackBarRight": 0,
  "toolTipFontSize": 12,
  "left": "0%"
 },
 {
  "paddingRight": 0,
  "overflow": "visible",
  "borderRadius": 0,
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "layout": "horizontal",
  "borderSize": 0,
  "height": "21.552%",
  "minHeight": 1,
  "shadow": false,
  "gap": 10,
  "horizontalAlign": "center",
  "scrollBarWidth": 10,
  "class": "Container",
  "bottom": "1%",
  "paddingBottom": 0,
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "scrollBarOpacity": 1,
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0,
  "contentOpaque": true,
  "maxHeight": 600,
  "maxWidth": 800,
  "right": "35%",
  "children": [
   {
    "paddingRight": 0,
    "verticalAlign": "middle",
    "borderRadius": 0,
    "paddingLeft": 0,
    "url": "skin/Image_BA7BB2B4_B1ED_FEB4_41C3_987DE346C922.png",
    "width": "40.241%",
    "borderSize": 0,
    "horizontalAlign": "center",
    "height": "47.5%",
    "class": "Image",
    "scaleMode": "fit_to_width",
    "shadow": false,
    "click": "this.openLink(\"https://www.spangtv.com\", \"_blank\")",
    "minHeight": 1,
    "cursor": "hand",
    "paddingBottom": 0,
    "id": "Image_BA7BB2B4_B1ED_FEB4_41C3_987DE346C922",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "minWidth": 1,
    "maxWidth": 1767,
    "maxHeight": 678
   }
  ],
  "verticalAlign": "bottom",
  "left": "35%",
  "minWidth": 400
 },
 {
  "paddingRight": 0,
  "overflow": "scroll",
  "borderRadius": 0,
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "width": "14.656%",
  "layout": "horizontal",
  "borderSize": 0,
  "height": "4.526%",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "gap": 10,
  "horizontalAlign": "center",
  "class": "Container",
  "bottom": "12.82%",
  "paddingBottom": 0,
  "shadow": false,
  "id": "Container_B03A0516_BB4F_5F29_41D3_E69A54913B7E",
  "scrollBarOpacity": 0,
  "scrollBarColor": "#000000",
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0,
  "minWidth": 1,
  "contentOpaque": false,
  "paddingTop": 0,
  "children": [
   "this.IconButton_A7C2E859_B794_03F3_41D8_C81477FDCCC7"
  ],
  "verticalAlign": "middle",
  "right": "42.52%"
 },
 {
  "playbackBarHeight": 20,
  "progressBackgroundColor": [
   "#000000"
  ],
  "paddingRight": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "progressLeft": 10,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipFontColor": "#606060",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipBorderSize": 1,
  "toolTipPaddingBottom": 4,
  "playbackBarBorderSize": 2,
  "toolTipBorderColor": "#767676",
  "progressBottom": 2,
  "progressBarOpacity": 1,
  "shadow": false,
  "toolTipTextShadowBlurRadius": 3,
  "progressRight": 10,
  "transitionMode": "blending",
  "progressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "paddingBottom": 0,
  "progressBackgroundColorRatios": [
   1
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingTop": 4,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadHeight": 30,
  "progressBarBorderSize": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "playbackBarLeft": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadWidth": 6,
  "progressBarBackgroundColorRatios": [
   1
  ],
  "progressHeight": 10,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowSpread": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "progressBorderSize": 0,
  "playbackBarHeadShadow": true,
  "playbackBarBottom": 0,
  "toolTipFontStyle": "normal",
  "borderRadius": 0,
  "paddingLeft": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#AAAAAA",
  "playbackBarOpacity": 1,
  "progressBarBackgroundColor": [
   "#FF0000"
  ],
  "toolTipShadowOpacity": 1,
  "width": "18.637%",
  "borderSize": 0,
  "height": "21.34%",
  "class": "ViewerArea",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipFontFamily": "Arial",
  "minHeight": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderRadius": 4,
  "playbackBarHeadShadowOpacity": 0.7,
  "bottom": "3.66%",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "id": "MapViewer",
  "playbackBarHeadShadowColor": "#000000",
  "toolTipPaddingRight": 6,
  "toolTipShadowColor": "#333333",
  "minWidth": 1,
  "progressBorderRadius": 4,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontWeight": "normal",
  "playbackBarRight": 0,
  "toolTipFontSize": 12,
  "left": "4.64%"
 }
], 
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_A7C2E859_B794_03F3_41D8_C81477FDCCC7], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0); this.playList_AA3B5596_BD7F_BE9E_41DF_F02ED35983A0.set('selectedIndex', 0)",
 "paddingRight": 0,
 "mouseWheelEnabled": false,
 "overflow": "visible",
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "width": "100%",
 "borderSize": 0,
 "height": "100%",
 "class": "Player",
 "layout": "absolute",
 "shadow": false,
 "gap": 10,
 "horizontalAlign": "left",
 "minHeight": 20,
 "vrPolyfillScale": 0.91,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "scripts": {
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "registerKey": function(key, value){  window[key] = value; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getKey": function(key){  return window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "existsKey": function(key){  return key in window; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "unregisterKey": function(key){  delete window[key]; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); }
 },
 "id": "rootPlayer",
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "minWidth": 20,
 "verticalAlign": "top"
})