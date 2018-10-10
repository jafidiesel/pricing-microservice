define({ "api": [
  {
    "type": "get",
    "url": "/v1/currency/:monedaOrigen/:monedaDestino",
    "title": "Convertir Monto",
    "name": "convertAmmount",
    "group": "Convert",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Convierte un monto enviado de una moneda especificada a otra moneda especificada</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Monto",
            "description": "<p>a convertir</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"idMoneda\": \"{idMoneda}\",  \n    \"codigoNumericoMoneda\": \"{codigoNumericoMoneda}\",\n    \"montoConvertido\": \"{montoConvertido}\",\n    \"abreviaturaMoneda\": \"{abreviaturaMoneda}\",\n    \"simboloMoneda\": \"{simboloMoneda}\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/index.js",
    "groupTitle": "Convert"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_core_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules__babel_traverse_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/copy-descriptor/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_copy_descriptor_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_copy_descriptor_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_fragment_cache_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_fragment_cache_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_fragment_cache_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_fragment_cache_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_fragment_cache_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/html-minifier/node_modules/commander/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_html_minifier_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/htmlparser2/node_modules/isarray/build/build.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/htmlparser2/node_modules/isarray/build/build.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/htmlparser2/node_modules/isarray/build/build.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/htmlparser2/node_modules/isarray/build/build.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/htmlparser2/node_modules/isarray/build/build.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/htmlparser2/node_modules/isarray/build/build.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_htmlparser2_node_modules_isarray_build_build_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_map_cache_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_map_cache_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_map_cache_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_map_cache_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_map_cache_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/object-copy/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_object_copy_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_object_copy_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/regex-not/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_regex_not_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_regex_not_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/regex-not/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_regex_not_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_regex_not_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/repeat-string/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_repeat_string_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_repeat_string_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/dist/debug.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/common.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/debug/src/node.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_node_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/script-ext-html-webpack-plugin/node_modules/ms/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_ms_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_script_ext_html_webpack_plugin_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/compiler.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_compiler_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/source-maps.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_source_maps_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_lib_source_maps_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/static-extend/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_static_extend_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_static_extend_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/to-regex/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_to_regex_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_to_regex_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/to-regex/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_to_regex_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_to_regex_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/use/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_use_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_use_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/use/index.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_use_index_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_use_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/util-deprecate/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_util_deprecate_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_util_deprecate_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/util-deprecate/browser.js",
    "group": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_util_deprecate_browser_js",
    "groupTitle": "_home_jafi_Documentos_git_CurrencyExchange_Microservice_node_modules_util_deprecate_browser_js",
    "name": "Public"
  }
] });
