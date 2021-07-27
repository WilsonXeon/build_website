
/*
jQuery Credit Card Validator 1.2

Copyright 2012 Pawel Decowski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
 */


var app = window.AddressSeleclList =
{
    AdrressArray: [
                    ['台北市', '100中正區', '103大同區', '104中山區', '105松山區', '106大安區', '108萬華區', '110信義區', '111士林區', '112北投區', '114內湖區', '115南港區', '116文山區'],
                    ['台北縣', '207萬里鄉', '208金山鄉', '220板橋市', '221汐止市', '222深坑鄉', '223石碇鄉', '224瑞芳鎮', '226平溪鄉', '227雙溪鄉', '228貢寮鄉', '231新店市', '232坪林鄉', '233烏來鄉', '234永和市', '235中和市', '236土城市', '237三峽鎮', '238樹林市', '239鶯歌鎮', '241三重市', '242新莊市', '243泰山鄉', '244林口鄉', '247蘆洲市', '248五股鄉', '248新莊市', '249八里鄉', '251淡水鎮', '252三芝鄉', '253石門鄉'],
                    ['台中市', '400中區', '401東區', '402南區', '403西區', '404北區', '406北屯區', '407西屯區', '408南屯區'],
                    ['台中縣', '411太平市', '412大里市', '413霧峰鄉', '414烏日鄉', '420豐原市', '421后里鄉', '422石岡鄉', '423東勢鎮', '424和平鄉', '426新社鄉', '427潭子鄉', '428大雅鄉', '429神岡鄉', '432大肚鄉', '433沙鹿鎮', '434龍井鄉', '435梧棲鎮', '436清水鎮', '437大甲鎮', '438外埔鄉', '439大安鄉'],
                    ['台東縣', '950台東市', '951綠島鄉', '952蘭嶼鄉', '953延平鄉', '954卑南鄉', '955鹿野鄉', '956關山鎮', '957海端鄉', '958池上鄉', '959東河鄉', '961成功鎮', '962長濱鄉', '963太麻里鄉', '964金峰鄉', '965大武鄉', '966達仁鄉'],
                    ['台南市', '700中西區', '701東區', '702南區', '704北區', '708安平區', '709安南區'],
                    ['台南縣', '710永康市', '711歸仁鄉', '712新化鎮', '713左鎮鄉', '714玉井鄉', '715楠西鄉', '716南化鄉', '717仁德鄉', '718關廟鄉', '719龍崎鄉', '720官田鄉', '721麻豆鎮', '722佳里鎮', '723西港鄉', '724七股鄉', '725將軍鄉', '726學甲鎮', '727北門鄉', '730新營市', '731後壁鄉', '732白河鎮', '733東山鄉', '734六甲鄉', '735下營鄉', '736柳營鄉', '737鹽水鎮', '741善化鎮', '741新市鄉', '742大內鄉', '743山上鄉', '744新市鄉', '745安定鄉'],
                    ['宜蘭縣', '260宜蘭市', '261頭城鎮', '262礁溪鄉', '263壯圍鄉', '264員山鄉', '265羅東鎮', '266三星鄉', '267大同鄉', '268五結鄉', '269冬山鄉', '270蘇澳鎮', '272南澳鄉', '290釣魚台'],
                    ['花蓮縣', '970花蓮市', '971新城鄉', '972秀林鄉', '973吉安鄉', '974壽豐鄉', '975鳳林鎮', '976光復鄉', '977豐濱鄉', '978瑞穗鄉', '979萬榮鄉', '981玉里鎮', '982卓溪鄉', '983富里鄉'],
                    ['金門縣', '890金沙鎮', '891金湖鎮', '892金寧鄉', '893金城鎮', '894烈嶼鄉', '896烏坵鄉'],
                    ['南投縣', '540南投市', '541中寮鄉', '542草屯鎮', '544國姓鄉', '545埔里鎮', '546仁愛鄉', '551名間鄉', '552集集鎮', '553水里鄉', '555魚池鄉', '556信義鄉', '557竹山鎮', '558鹿谷鄉'],
                    ['南海島', '817東沙群島', '819南沙群島'],
                    ['屏東縣', '900屏東市', '901三地門鄉', '902霧台鄉', '903瑪家鄉', '904九如鄉', '905里港鄉', '906高樹鄉', '907鹽埔鄉', '908長治鄉', '909麟洛鄉', '911竹田鄉', '912內埔鄉', '913萬丹鄉', '920潮州鎮', '921泰武鄉', '922來義鄉', '923萬巒鄉', '924崁頂鄉', '925新埤鄉', '926南州鄉', '927林邊鄉', '928東港鎮', '929琉球鄉', '931佳冬鄉', '932新園鄉', '940枋寮鄉', '941枋山鄉', '942春日鄉', '943獅子鄉', '944車城鄉', '945牡丹鄉', '946恆春鎮', '947滿州鄉'],
                    ['苗栗縣', '350竹南鎮', '351頭份鎮', '352三灣鄉', '353南庄鄉', '354獅潭鄉', '356後龍鎮', '357通霄鎮', '358苑裡鎮', '360苗栗市', '361造橋鄉', '362頭屋鄉', '363公館鄉', '364大湖鄉', '365泰安鄉', '366銅鑼鄉', '367三義鄉', '368西湖鄉', '369卓蘭鎮'],
                    ['桃園縣', '320中壢市', '324平鎮市', '325龍潭鄉', '326楊梅鎮', '327新屋鄉', '328觀音鄉', '330桃園市', '333龜山鄉', '334八德市', '335大溪鎮', '336復興鄉', '337大園鄉', '338蘆竹鄉'],
                    ['高雄市', '800新興區', '801前金區', '802苓雅區', '803鹽埕區', '804鼓山區', '805旗津區', '806前鎮區', '807三民區', '811楠梓區', '812小港區', '813左營區', '817東沙群島', '819南沙群島'],
                    ['高雄縣', '814仁武鄉', '815大社鄉', '820岡山鎮', '821路竹鄉', '822阿蓮鄉', '823田寮鄉', '824燕巢鄉', '825橋頭鄉', '826梓官鄉', '827彌陀鄉', '828永安鄉', '829湖內鄉', '830鳳山市', '831大寮鄉', '832林園鄉', '833鳥松鄉', '840大樹鄉', '842旗山鎮', '843美濃鎮', '844六龜鄉', '845內門鄉', '846杉林鄉', '847甲仙鄉', '848桃源鄉', '849那瑪夏鄉', '851茂林鄉', '852茄萣鄉'],
                    ['基隆市', '200仁愛區', '201信義區', '202中正區', '203中山區', '204安樂區', '205暖暖區', '206七堵區'],
                    ['連江縣', '209南竿鄉', '210北竿鄉', '211莒光鄉', '212東引鄉'],
                    ['釣魚台', '290釣魚台'],
                    ['雲林縣', '630斗南鎮', '631大埤鄉', '632虎尾鎮', '633土庫鎮', '634褒忠鄉', '635東勢鄉', '636台西鄉', '637崙背鄉', '638麥寮鄉', '640斗六市', '643林內鄉', '646古坑鄉', '647莿桐鄉', '648西螺鎮', '649二崙鄉', '651北港鎮', '652水林鄉', '653口湖鄉', '654四湖鄉', '655元長鄉'],
                    ['新竹市', '300北區', '300東區', '300香山區'],
                    ['新竹縣', '300寶山鄉', '302竹北市', '303湖口鄉', '304新豐鄉', '305新埔鎮', '306關西鎮', '307芎林鄉', '308寶山鄉', '310竹東鎮', '311五峰鄉', '312橫山鄉', '313尖石鄉', '314北埔鄉', '315峨眉鄉'],
                    ['嘉義市', '600西區', '600東區'],
                    ['嘉義縣', '602番路鄉', '603梅山鄉', '604竹崎鄉', '605阿里山鄉', '606中埔鄉', '607大埔鄉', '608水上鄉', '611鹿草鄉', '612太保市', '613朴子市', '614東石鄉', '615六腳鄉', '616新港鄉', '621民雄鄉', '622大林鎮', '623溪口鄉', '624義竹鄉', '625布袋鎮'],
                    ['彰化縣', '500彰化市', '502芬園鄉', '503花壇鄉', '504秀水鄉', '505鹿港鎮', '506福興鄉', '507線西鄉', '508和美鎮', '509伸港鄉', '510員林鎮', '511社頭鄉', '512永靖鄉', '513埔心鄉', '514溪湖鎮', '515大村鄉', '516埔鹽鄉', '520田中鎮', '521北斗鎮', '522田尾鄉', '523埤頭鄉', '524溪州鄉', '525竹塘鄉', '526二林鎮', '527大城鄉', '528芳苑鄉', '530二水鄉'],
                    ['澎湖縣', '880馬公市', '881西嶼鄉', '882望安鄉', '883七美鄉', '884白沙鄉', '885湖西鄉']
                  ]
    ,

    defaultOptionCityText: '請選擇縣市',
    defaultOptionCityValue: '',
    defaultOptionAreaText: '請選擇鄉鎮',
    defaultOptionAreaValue: '',
    
    Initialize: function (city, area, defaultCityText, defaultCityValue, defaultAreaText, defaultAreaValue) {

        var cityText = defaultCityText ? defaultCityText : this.defaultOptionCityText;
        var cityValue = defaultAreaValue ? defaultAreaValue : this.defaultOptionCityValue;
        var areaText = defaultAreaText ? defaultAreaText : this.defaultOptionAreaText;
        var areaValue = defaultAreaValue ? defaultAreaValue : this.defaultOptionAreaValue;

        var citySelect = document.getElementById(city);
        var areaSelect = document.getElementById(area);

        citySelect.options[0] = new Option(cityText, cityValue);
        areaSelect.options[0] = new Option(areaText, areaValue);
        for (var i = 0; i < this.AdrressArray.length; i++) {
            citySelect.options[i + 1] = new Option(this.AdrressArray[i][0], this.AdrressArray[i][0]);
        }
        citySelect.addEventListener ? citySelect.addEventListener('change', function (e) { app.AppendArea(e, areaSelect, areaText, areaValue) }, false) : citySelect.attachEvent('onchange', function (e) { app.AppendArea(e, areaSelect, areaText, areaValue) });
    },

    AppendArea: function (e, AreaSelect, areaText, areaValue) {
        var target = e.target ? e.target : e.srcElement;
        if (target.selectedIndex == 0) {
            AreaSelect.options.length = 0;
            AreaSelect.options[0] = new Option(areaText, areaValue);
            return;
        }
        AreaSelect.options.length = this.AdrressArray[target.selectedIndex - 1].length - 1;
        for (var i = 1; i < this.AdrressArray[target.selectedIndex - 1].length; i++) {
            AreaSelect.options[i - 1] = new Option(this.AdrressArray[target.selectedIndex - 1][i], this.AdrressArray[target.selectedIndex - 1][i]);
        }
    },

    ReturnSelectAddress: function (city, area) {
        var city = document.getElementById(city);
        var area = document.getElementById(area);
        return city.value + area.value;
    }
};

// $('#twzipcode').twzipcode();

// $('#twzipcode').twzipcode({
//   'zipcodeSel'  : '106', // 此參數會優先於 countySel, districtSel
//   'countySel'   : '臺北市',
//   'districtSel' : '大安區'
// });

// $('#twzipcode').twzipcode({
//   'detect': true // 預設值為 false
// });

// //或是 callback
// $('#twzipcode').twzipcode({
//   'detect': function (coords) {
//       console.log(coords.latitude);
//       console.log(coords.longitude);
//   }
// });

// /* Javascript */
// $('#twzipcode').twzipcode({
//   // 依序套用至縣市、鄉鎮市區及郵遞區號框
//   'css': ['county', 'district', 'zipcode']
// });

// $('#twzipcode').twzipcode({
//   'countyName'   : 'county',   // 預設值為 county
//   'districtName' : 'district', // 預設值為 district
//   'zipcodeName'  : 'zipcode'   // 預設值為 zipcode
// });

// // 使用元素陣列命名
// $('#twzipcode').twzipcode({
//   'countyName'   : 'county[]',
//   'districtName' : 'district[]',
//   'zipcodeName'  : 'zipcode[]',
// });

// //取得已選取縣市的郵遞區號 JSON 物件。
// var foo = $(selector).twzipcode('data');

// // 取得縣市（返回 string）
// $(selector).twzipcode('get', 'county');
// // 取得縣市、鄉鎮市區（返回 Array）
// $(selector).twzipcode('get', 'county,district');
// $(selector).twzipcode('get', [
//     'county',
//     'district'
// ]);
// $(selector).twzipcode('get', function (county, district, zipcode) {
//     console.log(county);
//     console.log(district);
//     console.log(zipcode);
// });

// // 直接設置郵遞區號
// $(selector).twzipcode('set', 110);
// // 或是
// $(selector).twzipcode('set', {
//     'zipcode': '110'
// });

// // 縣市
// $(selector).twzipcode('set', {
//     'county': '臺北市'
// });

// // 縣市及鄉鎮市區
// $(selector).twzipcode('set', {
//     'county': '臺北市',
//     'district': '信義區'
// });

// // ※新竹市、嘉義市等共享郵遞區號的區域，請至少傳入縣市或鄉鎮市區輔助判斷。
// $(selector).twzipcode('set', {
//     'district': '北區',
//     'zipcode': 300
// });
// // 或是傳入完整的參數
// $(selector).twzipcode('set', {
//     'county': '嘉義市'
//     'district': '西區',
//     'zipcode': 600
// });

// //取得 Query String。
// var foo = $(selector).twzipcode('serialize');

// //重置清單項目。
// $(selector).twzipcode('reset');

(function() {
  var $, Range, Trie,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  $ = jQuery;

  $.fn.validateCreditCard = function(callback, options) {
    var bind, card, card_type, card_types, get_card_type, is_valid_length, is_valid_luhn, j, len, normalize, ref, validate, validate_number;
    card_types = [
      {
        name: 'amex',
        range: '34,37',
        valid_length: [15]
      }, {
        name: 'diners_club_carte_blanche',
        range: '300-305',
        valid_length: [16, 17, 18, 19]
      }, {
        name: 'diners_club_international',
        range: '3095, 36, 38-39',
        valid_length: [14, 15, 16, 17, 18, 19]
      }, {
        name: 'jcb',
        range: '3088-3094, 3096-3102, 3112-3120, 3158-3159, 3337-3349, 3528-3589',
        valid_length: [16]
      }, {
        name: 'laser',
        range: '6304, 6706, 6709, 6771',
        valid_length: [16, 17, 18, 19]
      }, {
        name: 'visa_electron',
        range: '4026, 417500, 4508, 4844, 4913, 4917',
        valid_length: [16]
      }, {
        name: 'visa',
        range: '4',
        valid_length: [13, 14, 15, 16, 17, 18, 19]
      }, {
        name: 'mastercard',
        range: '51-55,2221-2720',
        valid_length: [16]
      }, {
        name: 'discover',
        range: '6011, 622126-622925, 644-649, 65',
        valid_length: [16, 17, 18, 19]
      }, {
        name: 'dankort',
        range: '5019',
        valid_length: [16]
      }, {
        name: 'maestro',
        range: '50, 56-69',
        valid_length: [12, 13, 14, 15, 16, 17, 18, 19]
      }, {
        name: 'uatp',
        range: '1',
        valid_length: [15]
      }, {
        name: 'mir',
        range: '2200-2204',
        valid_length: [16]
      }
    ];
    bind = false;
    if (callback) {
      if (typeof callback === 'object') {
        options = callback;
        bind = false;
        callback = null;
      } else if (typeof callback === 'function') {
        bind = true;
      }
    }
    if (options == null) {
      options = {};
    }
    if (options.accept == null) {
      options.accept = (function() {
        var j, len, results;
        results = [];
        for (j = 0, len = card_types.length; j < len; j++) {
          card = card_types[j];
          results.push(card.name);
        }
        return results;
      })();
    }
    ref = options.accept;
    for (j = 0, len = ref.length; j < len; j++) {
      card_type = ref[j];
      if (indexOf.call((function() {
        var k, len1, results;
        results = [];
        for (k = 0, len1 = card_types.length; k < len1; k++) {
          card = card_types[k];
          results.push(card.name);
        }
        return results;
      })(), card_type) < 0) {
        throw Error("Credit card type '" + card_type + "' is not supported");
      }
    }
    get_card_type = function(number) {
      var k, len1, r, ref1;
      ref1 = (function() {
        var l, len1, ref1, results;
        results = [];
        for (l = 0, len1 = card_types.length; l < len1; l++) {
          card = card_types[l];
          if (ref1 = card.name, indexOf.call(options.accept, ref1) >= 0) {
            results.push(card);
          }
        }
        return results;
      })();
      for (k = 0, len1 = ref1.length; k < len1; k++) {
        card_type = ref1[k];
        r = Range.rangeWithString(card_type.range);
        if (r.match(number)) {
          return card_type;
        }
      }
      return null;
    };
    is_valid_luhn = function(number) {
      var digit, k, len1, n, ref1, sum;
      sum = 0;
      ref1 = number.split('').reverse();
      for (n = k = 0, len1 = ref1.length; k < len1; n = ++k) {
        digit = ref1[n];
        digit = +digit;
        if (n % 2) {
          digit *= 2;
          if (digit < 10) {
            sum += digit;
          } else {
            sum += digit - 9;
          }
        } else {
          sum += digit;
        }
      }
      return sum % 10 === 0;
    };
    is_valid_length = function(number, card_type) {
      var ref1;
      return ref1 = number.length, indexOf.call(card_type.valid_length, ref1) >= 0;
    };
    validate_number = function(number) {
      var length_valid, luhn_valid;
      card_type = get_card_type(number);
      luhn_valid = is_valid_luhn(number);
      length_valid = false;
      if (card_type != null) {
        length_valid = is_valid_length(number, card_type);
      }
      return {
        card_type: card_type,
        valid: luhn_valid && length_valid,
        luhn_valid: luhn_valid,
        length_valid: length_valid
      };
    };
    validate = (function(_this) {
      return function() {
        var number;
        number = normalize($(_this).val());
        return validate_number(number);
      };
    })(this);
    normalize = function(number) {
      return number.replace(/[ -]/g, '');
    };
    if (!bind) {
      return validate();
    }
    this.on('input.jccv', (function(_this) {
      return function() {
        $(_this).off('keyup.jccv');
        return callback.call(_this, validate());
      };
    })(this));
    this.on('keyup.jccv', (function(_this) {
      return function() {
        return callback.call(_this, validate());
      };
    })(this));
    callback.call(this, validate());
    return this;
  };

  Trie = (function() {
    function Trie() {
      this.trie = {};
    }

    Trie.prototype.push = function(value) {
      var char, i, j, len, obj, ref, results;
      value = value.toString();
      obj = this.trie;
      ref = value.split('');
      results = [];
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        char = ref[i];
        if (obj[char] == null) {
          if (i === (value.length - 1)) {
            obj[char] = null;
          } else {
            obj[char] = {};
          }
        }
        results.push(obj = obj[char]);
      }
      return results;
    };

    Trie.prototype.find = function(value) {
      var char, i, j, len, obj, ref;
      value = value.toString();
      obj = this.trie;
      ref = value.split('');
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        char = ref[i];
        if (obj.hasOwnProperty(char)) {
          if (obj[char] === null) {
            return true;
          }
        } else {
          return false;
        }
        obj = obj[char];
      }
    };

    return Trie;

  })();

  Range = (function() {
    function Range(trie1) {
      this.trie = trie1;
      if (this.trie.constructor !== Trie) {
        throw Error('Range constructor requires a Trie parameter');
      }
    }

    Range.rangeWithString = function(ranges) {
      var j, k, len, n, r, range, ref, ref1, trie;
      if (typeof ranges !== 'string') {
        throw Error('rangeWithString requires a string parameter');
      }
      ranges = ranges.replace(/ /g, '');
      ranges = ranges.split(',');
      trie = new Trie;
      for (j = 0, len = ranges.length; j < len; j++) {
        range = ranges[j];
        if (r = range.match(/^(\d+)-(\d+)$/)) {
          for (n = k = ref = r[1], ref1 = r[2]; ref <= ref1 ? k <= ref1 : k >= ref1; n = ref <= ref1 ? ++k : --k) {
            trie.push(n);
          }
        } else if (range.match(/^\d+$/)) {
          trie.push(range);
        } else {
          throw Error("Invalid range '" + r + "'");
        }
      }
      return new Range(trie);
    };

    Range.prototype.match = function(number) {
      return this.trie.find(number);
    };

    return Range;

  })();

}).call(this);













// Generated by CoffeeScript 1.4.0
(function () {
  $(function () {
      $(".numbers a").click(function (e) {
          e.preventDefault();
          return $("#card_number").val($(this).text()).trigger("input")
      });
      $(".vertical.maestro").hide().css({
          opacity: 0
      });
      return $("#card_number").validateCreditCard(function (e) {
          if (e.card_type == null) {
              $(".cards li").removeClass("off");
              $("#card_number").removeClass("valid");
              $(".vertical.maestro").slideUp({
                  duration: 200
              }).animate({
                  opacity: 0
              }, {
                  queue: !1,
                  duration: 200
              });
              return
          }
          $(".cards li").addClass("off");
          $(".cards ." + e.card_type.name).removeClass("off");
          e.card_type.name === "maestro" ? $(".vertical.maestro").slideDown({
              duration: 200
          }).animate({
              opacity: 1
          }, {
              queue: !1
          }) : $(".vertical.maestro").slideUp({
              duration: 200
          }).animate({
              opacity: 0
          }, {
              queue: !1,
              duration: 200
          });
          return e.length_valid && e.luhn_valid ? $("#card_number").addClass("valid") :       $("#card_number").removeClass("valid")
      }, {
          accept: ["visa", "visa_electron", "mastercard", "maestro", "discover"]
      })
  })
}).call(this);
