(function() {
    tinymce.PluginManager.add('ss_tc_button', function( editor, url ) {
        editor.addButton( 'ss_tc_button', {
            title: 'Semantic Shortcode',
            type: 'menubutton',
            icon: 'sematicicon',
            menu: [
                {
                    text: 'Elements 1',
                    value: '',
                    onclick: function() {
                        editor.insertContent(this.value());
                    },
                    menu: [
                        {
                            text: 'Button',
                            value: '',
                            onclick: function(e) {
                                e.stopPropagation();
                                editor.windowManager.open( {
                                    title: 'Semantic Button Shortcode',
                                    body: [{
                                        type: 'textbox',
                                        name: 'title',
                                        label: 'Your button title'
                                    },
                                    {
                                        type: 'textbox',
                                        name: 'title1',
                                        label: 'Animated hidden/hover content'
                                    },
                                    {
                                        type: 'textbox',
                                        name: 'link',
                                        label: 'Link of button'
                                    },
                                    {
                                        type: 'textbox',
                                        name: 'classes',
                                        label: 'Additional classes'
                                    },
                                    {
                                        type: 'listbox', 
                                        name: 'sizes', 
                                        label: 'Button Size', 
                                        'values': [
                                            {text: 'None', value: ''},
                                            {text: 'Mini', value: 'mini'},
                                            {text: 'Tiny', value: 'tiny'},
                                            {text: 'Small', value: 'small'},
                                            {text: 'Medium', value: 'medium'},
                                            {text: 'Large', value: 'large'},
                                            {text: 'Big', value: 'big'},
                                            {text: 'Huge', value: 'huge'},
                                            {text: 'Massive', value: 'massive'}
                                        ]
                                    },
                                    {
                                        type: 'listbox', 
                                        name: 'color', 
                                        label: 'Color', 
                                        'values': [
                                            {text: 'None', value: ''},
                                            {text: 'Black', value: 'black'},
                                            {text: 'Blue', value: 'blue'},
                                            {text: 'Green ', value: 'green'},
                                            {text: 'Orange ', value: 'orange'},
                                            {text: 'Pink ', value: 'pink'},
                                            {text: 'Purple ', value: 'purple'},
                                            {text: 'Red ', value: 'red'},
                                            {text: 'Teal ', value: 'teal'},
                                            {text: 'Yellow  ', value: 'yellow'}
                                        ]
                                    },
                                    {
                                        type: 'listbox', 
                                        name: 'level', 
                                        label: 'Button Style', 
                                        'values': [
                                            {text: 'Standard ', value: 'ui button'},
                                            {text: 'Primary', value: 'ui primary button'},
                                            {text: 'Secondary', value: 'ui secondary button'},
                                            {text: 'Animated Horizontal', value: 'ui animated button'},
                                            {text: 'Animated Vertical', value: 'ui vertical animated button'},
                                            {text: 'Animated Fade', value: 'ui animated fade button'}
                                        ]
                                    }],
                                    onsubmit: function( e ) {
                                        editor.insertContent( '&#91;ss_button title="' + e.data.title + '" title2="' + e.data.title1 + '" style="' + e.data.level + '" class="'+ e.data.classes +'"  size="'+ e.data.sizes +'" color="'+e.data.color+'" link="'+e.data.link+'"&#93;');
                                    }
                                });
                            }       
                        },
                        {
                            text: 'Divider',
                            value: '',
                            onclick: function(e) {
                                e.stopPropagation();
                                editor.windowManager.open( {
                                    title: 'Semantic Divider Shortcode',
                                    body: [{
                                        type: 'textbox',
                                        name: 'title',
                                        label: 'Your divider title'
                                    },
                                    {
                                        type: 'textbox',
                                        name: 'classes',
                                        label: 'Additional classes'
                                    },
                                    {
                                        type: 'listbox', 
                                        name: 'level', 
                                        label: 'Style', 
                                        'values': [
                                            {text: 'Standard', value: 'ui divider'},
                                            {text: 'Horizontal', value: 'ui horizontal divider'},
                                            {text: 'Vertical', value: 'ui vertical divider'}
                                        ]
                                    }],
                                    onsubmit: function( e ) {
                                        editor.insertContent( '&#91;ss_divider title="' + e.data.title + '" style="' + e.data.level + '" class="'+ e.data.classes +'"&#93;');
                                    }
                                });
                            }       
                        },
                        {
                            text: 'Flag',
                            value: '',
                            onclick: function(e) {
                                e.stopPropagation();
                                editor.windowManager.open( {
                                    title: 'Insert Flag tag',
                                    body: [{
                                        type: 'listbox', 
                                        name: 'country', 
                                        label: 'Select Flag', 
                                        'values': [
                                            {text: 'Andorra', value: 'flag ad'},
                                            {text: 'U.A.E', value: 'flag ae'},
                                            {text: 'Afghanistan', value: 'flag af'},
                                            {text: 'Antigua', value: 'flag ag'},
                                            {text: 'Anguilla', value: 'flag ai'},
                                            {text: 'Albania', value: 'flag al'},
                                            {text: 'Armenia', value: 'flag am'},
                                            {text: 'Netherlands Antilles', value: 'flag an'},
                                            {text: 'Angola', value: 'flag ao'},
                                            {text: 'Argentina', value: 'flag ar'},
                                            {text: 'American Samoa', value: 'flag as'},
                                            {text: 'Austria', value: 'flag at'},
                                            {text: 'Australia', value: 'flag au'},
                                            {text: 'Aruba', value: 'flag aw'},
                                            {text: 'Aland Islands', value: 'flag ax'},
                                            {text: 'Azerbaijan', value: 'flag az'},
                                            {text: 'Bosnia', value: 'flag ba'},
                                            {text: 'Barbados', value: 'flag bb'},
                                            {text: 'Bangladesh', value: 'flag bd'},
                                            {text: 'Belgium', value: 'flag be'},
                                            {text: 'Burkina Faso', value: 'flag bf'},
                                            {text: 'Bulgaria', value: 'flag bg'},
                                            {text: 'Bahrain', value: 'flag bh'},
                                            {text: 'Burundi', value: 'flag bi'},
                                            {text: 'Benin', value: 'flag bj'},
                                            {text: 'Bermuda', value: 'flag bm'},
                                            {text: 'Brunei', value: 'flag bn'},
                                            {text: 'Bolivia', value: 'flag bo'},
                                            {text: 'Brazil', value: 'flag br'},
                                            {text: 'Bahamas', value: 'flag bs'},
                                            {text: 'Bhutan', value: 'flag bt'},
                                            {text: 'Bouvet Island', value: 'flag bv'},                                            
                                            {text: 'Botswana', value: 'bw flag'},
                                            {text: 'Belarus', value: 'by flag'},
                                            {text: 'Belize', value: 'bz flag'},
                                            {text: 'Canada', value: 'ca flag'},
                                            {text: 'Cocos Islands', value: 'cc flag'},
                                            {text: 'Congo', value: 'cd flag'},
                                            {text: 'Central African Republic', value: 'cf flag'},
                                            {text: 'Congo Brazzaville', value: 'cg flag'},
                                            {text: 'Switzerland', value: 'ch flag'},
                                            {text: 'Cote Divoire', value: 'ci flag'},
                                            {text: 'Cook Islands', value: 'ck flag'},
                                            {text: 'Chile', value: 'cl flag'},
                                            {text: 'Cameroon', value: 'cm flag'},
                                            {text: 'China', value: 'cn flag'},
                                            {text: 'Colombia', value: 'co flag'},
                                            {text: 'Costa Rica', value: 'cr flag'},
                                            {text: 'Serbia', value: 'cs flag'},
                                            {text: 'Cuba', value: 'cu flag'},
                                            {text: 'Cape Verde', value: 'cv flag'},
                                            {text: 'Christmas Island', value: 'cx flag'},
                                            {text: 'Cyprus', value: 'cy flag'},
                                            {text: 'Czech Republic', value: 'cz flag'},
                                            {text: 'Germany', value: 'de flag'},
                                            {text: 'Djibouti', value: 'dj flag'},
                                            {text: 'Denmark', value: 'dk flag'},
                                            {text: 'Dominica', value: 'dm flag'},
                                            {text: 'Dominican Republic', value: 'do flag'},
                                            {text: 'Algeria', value: 'dz flag'},
                                            {text: 'Ecuador', value: 'ec flag'},
                                            {text: 'Estonia', value: 'ee flag'},
                                            {text: 'Egypt', value: 'eg flag'},
                                            {text: 'Western Sahara', value: 'eh flag'},
                                            {text: 'Eritrea', value: 'er flag'},
                                            {text: 'Spain', value: 'es flag'},
                                            {text: 'Ethiopia', value: 'et flag'},
                                            {text: 'European Union', value: 'eu flag'},
                                            {text: 'Finland', value: 'fi flag'},
                                            {text: 'Fiji', value: 'fj flag'},
                                            {text: 'Falkland Islands', value: 'fk flag'},
                                            {text: 'Micronesia', value: 'fm flag'},
                                            {text: 'Faroe Islands', value: 'fo flag'},
                                            {text: 'France', value: 'fr flag'},
                                            {text: 'Gabon', value: 'ga flag'},
                                            {text: 'United Kingdom', value: 'gb flag'},
                                            {text: 'Grenada', value: 'gd flag'},
                                            {text: 'Georgia', value: 'ge flag'},
                                            {text: 'French Guiana', value: 'gf flag'},
                                            {text: 'Ghana', value: 'gh flag'},
                                            {text: 'Gibraltar', value: 'gi flag'},
                                            {text: 'Greenland', value: 'gl flag'},
                                            {text: 'Gambia', value: 'gm flag'},
                                            {text: 'Guinea', value: 'gn flag'},
                                            {text: 'Guadeloupe', value: 'gp flag'},
                                            {text: 'Equatorial Guinea', value: 'gq flag'},
                                            {text: 'Greece', value: 'gr flag'},
                                            {text: 'Sandwich Islands', value: 'gs flag'},
                                            {text: 'Guatemala', value: 'gt flag'},
                                            {text: 'Guam', value: 'gu flag'},
                                            {text: 'Guinea-bissau', value: 'gw flag'},
                                            {text: 'Guyana', value: 'gy flag'},
                                            {text: 'Hong Kong', value: 'hk flag'},
                                            {text: 'Heard Island', value: 'hm flag'},
                                            {text: 'Honduras', value: 'hn flag'},
                                            {text: 'Croatia', value: 'hr flag'},
                                            {text: 'Haiti', value: 'ht flag'},
                                            {text: 'Hungary', value: 'hu flag'},
                                            {text: 'Indonesia', value: 'id flag'},
                                            {text: 'Ireland', value: 'ie flag'},
                                            {text: 'Israel', value: 'il flag'},
                                            {text: 'India', value: 'in flag'},
                                            {text: 'Indian Ocean Territory', value: 'io flag'},
                                            {text: 'Iraq', value: 'iq flag'},
                                            {text: 'Iran', value: 'ir flag'},
                                            {text: 'Iceland', value: 'is flag'},
                                            {text: 'Italy', value: 'it flag'},
                                            {text: 'Jamaica', value: 'jm flag'},
                                            {text: 'Jordan', value: 'jo flag'},
                                            {text: 'Japan', value: 'jp flag'},
                                            {text: 'Kenya', value: 'ke flag'},
                                            {text: 'Kyrgyzstan', value: 'kg flag'},
                                            {text: 'Cambodia', value: 'kh flag'},
                                            {text: 'Kiribati', value: 'ki flag'},
                                            {text: 'Comoros', value: 'km flag'},
                                            {text: 'Saint Kitts And Nevis', value: 'kn flag'},
                                            {text: 'North Korea', value: 'kp flag'},
                                            {text: 'South Korea', value: 'kr flag'},
                                            {text: 'Kuwait', value: 'kw flag'},
                                            {text: 'Cayman Islands', value: 'ky flag'},
                                            {text: 'Kazakhstan', value: 'kz flag'},
                                            {text: 'Laos', value: 'la flag'},
                                            {text: 'Lebanon', value: 'lb flag'},
                                            {text: 'Saint Lucia', value: 'lc flag'},
                                            {text: 'Liechtenstein', value: 'li flag'},
                                            {text: 'Sri Lanka', value: 'lk flag'},
                                            {text: 'Liberia', value: 'lr flag'},
                                            {text: 'Lesotho', value: 'ls flag'},
                                            {text: 'Lithuania', value: 'lt flag'},
                                            {text: 'Luxembourg', value: 'lu flag'},
                                            {text: 'Latvia', value: 'lv flag'},
                                            {text: 'Libya', value: 'ly flag'},
                                            {text: 'Morocco', value: 'ma flag'},
                                            {text: 'Monaco', value: 'mc flag'},
                                            {text: 'Moldova', value: 'md flag'},
                                            {text: 'Montenegro', value: 'me flag'},
                                            {text: 'Madagascar', value: 'mg flag'},
                                            {text: 'Marshall Islands', value: 'mh flag'},
                                            {text: 'Macedonia', value: 'mk flag'},
                                            {text: 'Mali', value: 'ml flag'},
                                            {text: 'Burma', value: 'myanmar flag'},
                                            {text: 'Mongolia', value: 'mn flag'},
                                            {text: 'Macau', value: 'mo flag'},
                                            {text: 'Northern Mariana Islands', value: 'mp flag'},
                                            {text: 'Martinique', value: 'mq flag'},
                                            {text: 'Mauritania', value: 'mr flag'},
                                            {text: 'Montserrat', value: 'ms flag'},
                                            {text: 'Malta', value: 'mt flag'},
                                            {text: 'Mauritius', value: 'mu flag'},
                                            {text: 'Maldives', value: 'mv flag'},
                                            {text: 'Malawi', value: 'mw flag'},
                                            {text: 'Mexico', value: 'mx flag'},
                                            {text: 'Malaysia', value: 'my flag'},
                                            {text: 'Mozambique', value: 'mz flag'},
                                            {text: 'Namibia', value: 'na flag'},
                                            {text: 'New Caledonia', value: 'nc flag'},
                                            {text: 'Niger', value: 'ne flag'},
                                            {text: 'Norfolk Island', value: 'nf flag'},
                                            {text: 'Nigeria', value: 'ng flag'},
                                            {text: 'Nicaragua', value: 'ni flag'},
                                            {text: 'Netherlands', value: 'nl flag'},
                                            {text: 'Norway', value: 'no flag'},
                                            {text: 'Nepal', value: 'np flag'},
                                            {text: 'Nauru', value: 'nr flag'},
                                            {text: 'Niue', value: 'nu flag'},
                                            {text: 'New Zealand', value: 'nz flag'},
                                            {text: 'Oman', value: 'om flag'},
                                            {text: 'Panama', value: 'pa flag'},
                                            {text: 'Peru', value: 'pe flag'},
                                            {text: 'French Polynesia', value: 'pf flag'},
                                            {text: 'New Guinea', value: 'pg flag'},
                                            {text: 'Philippines', value: 'ph flag'},
                                            {text: 'Pakistan', value: 'pk flag'},
                                            {text: 'Poland', value: 'pl flag'},
                                            {text: 'Saint Pierre', value: 'pm flag'},
                                            {text: 'Pitcairn Islands', value: 'pn flag'},
                                            {text: 'Puerto Rico', value: 'pr flag'},
                                            {text: 'Palestine', value: 'ps flag'},
                                            {text: 'Portugal', value: 'pt flag'},
                                            {text: 'Palau', value: 'pw flag'},
                                            {text: 'Paraguay', value: 'py flag'},
                                            {text: 'Qatar', value: 'qa flag'},
                                            {text: 'Reunion', value: 're flag'},
                                            {text: 'Romania', value: 'ro flag'},
                                            {text: 'Serbia', value: 'rs flag'},
                                            {text: 'Russia', value: 'ru flag'},
                                            {text: 'Rwanda', value: 'rw flag'},
                                            {text: 'Saudi Arabia', value: 'sa flag'},
                                            {text: 'Solomon Islands', value: 'sb flag'},
                                            {text: 'Seychelles', value: 'sc flag'},
                                            {text: 'Sudan', value: 'sd flag'},
                                            {text: 'Sweden', value: 'se flag'},
                                            {text: 'Singapore', value: 'sg flag'},
                                            {text: 'Saint Helena', value: 'sh flag'},
                                            {text: 'Slovenia', value: 'si flag'},
                                            {text: 'Jan Mayen', value: 'sj flag'},
                                            {text: 'Slovakia', value: 'sk flag'},
                                            {text: 'Sierra Leone', value: 'sl flag'},
                                            {text: 'San Marino', value: 'sm flag'},
                                            {text: 'Senegal', value: 'sn flag'},
                                            {text: 'Somalia', value: 'so flag'},
                                            {text: 'Suriname', value: 'sr flag'},
                                            {text: 'Sao Tome', value: 'st flag'},
                                            {text: 'El Salvador', value: 'sv flag'},
                                            {text: 'Syria', value: 'sy flag'},
                                            {text: 'Swaziland', value: 'sz flag'},
                                            {text: 'Caicos Islands', value: 'tc flag'},
                                            {text: 'Chad', value: 'td flag'},
                                            {text: 'French Territories', value: 'tf flag'},
                                            {text: 'Togo', value: 'tg flag'},
                                            {text: 'Thailand', value: 'th flag'},
                                            {text: 'Tajikistan', value: 'tj flag'},
                                            {text: 'Tokelau', value: 'tk flag'},
                                            {text: 'Timorleste', value: 'tl flag'},
                                            {text: 'Turkmenistan', value: 'tm flag'},
                                            {text: 'Tunisia', value: 'tn flag'},
                                            {text: 'Tonga', value: 'to flag'},
                                            {text: 'Turkey', value: 'tr flag'},
                                            {text: 'Trinidad', value: 'tt flag'},
                                            {text: 'Tuvalu', value: 'tv flag'},
                                            {text: 'Taiwan', value: 'tw flag'},
                                            {text: 'Tanzania', value: 'tz flag'},
                                            {text: 'Ukraine', value: 'ua flag'},
                                            {text: 'Uganda', value: 'ug flag'},
                                            {text: 'Us Minor Islands', value: 'um flag'},
                                            {text: 'United States', value: 'us flag'},
                                            {text: 'Uruguay', value: 'uy flag'},
                                            {text: 'Uzbekistan', value: 'uz flag'},
                                            {text: 'Vatican City', value: 'va flag'},
                                            {text: 'Saint Vincent', value: 'vc flag'},
                                            {text: 'Venezuela', value: 've flag'},
                                            {text: 'British Virgin Islands', value: 'vg flag'},
                                            {text: 'Us Virgin Islands', value: 'vi flag'},
                                            {text: 'Vietnam', value: 'vn flag'},
                                            {text: 'Vanuatu', value: 'vu flag'},
                                            {text: 'Wallis And Futuna', value: 'wf flag'},
                                            {text: 'Samoa', value: 'ws flag'},
                                            {text: 'Yemen', value: 'ye flag'},
                                            {text: 'Mayotte', value: 'yt flag'},
                                            {text: 'South Africa', value: 'za flag'},
                                            {text: 'Zambia', value: 'zm flag'},
                                            {text: 'Zimbabwe', value: 'zw flag'}
                                        ]
                                    },
                                    {
                                        type: 'textbox',
                                        name: 'classes',
                                        label: 'Additional classes'
                                    }],
                                    onsubmit: function( e ) {
                                        editor.insertContent( '&#91;ss_flag country="' + e.data.country + '" class="' + e.data.classes+ '"&#93;');
                                    }
                                });
                            }       
                        },
                        {
                            text: 'Header',
                            value: '',
                            onclick: function(e) {
                                e.stopPropagation();
                                editor.windowManager.open( {
                                    title: 'Insert header tag',
                                    body: [{
                                        type: 'textbox',
                                        name: 'title',
                                        label: 'Your title'
                                    },
                                    {
                                        type: 'textbox',
                                        name: 'classes',
                                        label: 'Additional classes'
                                    },
                                    {
                                        type: 'textbox',
                                        name: 'title2',
                                        label: 'Your Sub Header'
                                    },
                                    {
                                        type: 'listbox', 
                                        name: 'sizes', 
                                        label: 'Size', 
                                        'values': [
                                            {text: 'None', value: ''},
                                            {text: 'Mini', value: 'mini'},
                                            {text: 'Tiny', value: 'tiny'},
                                            {text: 'Small', value: 'small'},
                                            {text: 'Medium', value: 'medium'},
                                            {text: 'Large', value: 'large'},
                                            {text: 'Big', value: 'big'},
                                            {text: 'Huge', value: 'huge'},
                                            {text: 'Massive', value: 'massive'}
                                        ]
                                    },
                                    {
                                        type: 'listbox', 
                                        name: 'color', 
                                        label: 'Color', 
                                        'values': [
                                            {text: 'None', value: ''},
                                            {text: 'Black', value: 'black'},
                                            {text: 'Blue', value: 'blue'},
                                            {text: 'Green ', value: 'green'},
                                            {text: 'Orange ', value: 'orange'},
                                            {text: 'Pink ', value: 'pink'},
                                            {text: 'Purple ', value: 'purple'},
                                            {text: 'Red ', value: 'red'},
                                            {text: 'Teal ', value: 'teal'},
                                            {text: 'Yellow  ', value: 'yellow'}
                                        ]
                                    },
                                    {
                                        type: 'listbox', 
                                        name: 'style', 
                                        label: 'Style', 
                                        'values': [
                                            {text: 'None', value: ''},
                                            {text: 'Dividing', value: 'dividing'},
                                            {text: 'Block', value: 'block'},
                                            {text: 'Attached', value: 'attached'},
                                            {text: 'Left floated ', value: 'left floated '},
                                            {text: 'Right floated', value: 'floated right'},
                                            {text: 'Right aligned', value: 'right aligned'},
                                            {text: 'Left aligned', value: 'left aligned'},
                                            {text: 'Center aligned', value: 'center aligned'}
                                        ]
                                    },
                                    {
                                        type: 'listbox', 
                                        name: 'level', 
                                        label: 'Header level', 
                                        'values': [
                                            {text: '<h1>', value: '1'},
                                            {text: '<h2>', value: '2'},
                                            {text: '<h3>', value: '3'},
                                            {text: '<h4>', value: '4'},
                                            {text: '<h5>', value: '5'},
                                            {text: '<h6>', value: '6'}
                                        ]
                                    }],
                                    onsubmit: function( e ) {
                                        editor.insertContent( '&#91;ss_header level="' + e.data.level + '" class="' + e.data.classes + '" title2="'+ e.data.title2 +'" title="'+ e.data.title +'" style="'+   e.data.style +'" color="'+  e.data.color +'" size="'+e.data.sizes+'"&#93;' );
                                    }
                                });
                            }       
                        },
                        {
                            text: 'Icon',
                            value: '',
                            onclick: function(e) {
                                e.stopPropagation();
                                editor.windowManager.open( {
                                    title: 'Insert Icon tag',
                                    body: [{
                                        type: 'listbox', 
                                        name: 'icon', 
                                        label: 'Select Icon', 
                                        'values': [
                                           {value: 'alarm icon', text:'Alarm'},
                                            {value: 'alarm slash icon', text:'Alarm Slash'},
                                            {value: 'alarm outline icon', text:'Alarm Outline'},
                                            {value: 'alarm slash outline icon', text:'Alarm Slash Outline'},
                                            {value: 'at icon', text:'At'},
                                            {value: 'browser icon', text:'Browser'},
                                            {value: 'bug icon', text:'Bug'},
                                            {value: 'calendar outline icon', text:'Calendar Outline'},
                                            {value: 'calendar icon', text:'Calendar'},
                                            {value: 'cloud icon', text:'Cloud'},
                                            {value: 'code icon', text:'Code'},
                                            {value: 'comment icon', text:'Comment'},
                                            {value: 'comments icon', text:'Comments'},
                                            {value: 'comment outline icon', text:'Comment Outline'},
                                            {value: 'comments outline icon', text:'Comments Outline'},
                                            {value: 'copyright icon', text:'Copyright'},
                                            {value: 'dashboard icon', text:'Dashboard'},
                                            {value: 'external square icon', text:'External Square'},
                                            {value: 'external icon', text:'External'},
                                            {value: 'eyedropper icon', text:'Eyedropper'},
                                            {value: 'feed icon', text:'Feed'},
                                            {value: 'find icon', text:'Find'},
                                            {value: 'heartbeat icon', text:'Heartbeat'},
                                            {value: 'history icon', text:'History'},
                                            {value: 'home icon', text:'Home'},
                                            {value: 'idea icon', text:'Idea'},
                                            {value: 'inbox icon', text:'Inbox'},
                                            {value: 'lab icon', text:'Lab'},
                                            {value: 'mail icon', text:'Mail'},
                                            {value: 'mail outline icon', text:'Mail Outline'},
                                            {value: 'mail square icon', text:'Mail Square'},
                                            {value: 'map icon', text:'Map'},
                                            {value: 'options icon', text:'Options'},
                                            {value: 'paint brush icon', text:'Paint Brush'},
                                            {value: 'payment icon', text:'Payment'},
                                            {value: 'privacy icon', text:'Privacy'},
                                            {value: 'protect icon', text:'Protect'},
                                            {value: 'search icon', text:'Search'},
                                            {value: 'setting icon', text:'Setting'},
                                            {value: 'settings icon', text:'Settings'},
                                            {value: 'shop icon', text:'Shop'},
                                            {value: 'signal icon', text:'Signal'},
                                            {value: 'sitemap icon', text:'Sitemap'},
                                            {value: 'tag icon', text:'Tag'},
                                            {value: 'tags icon', text:'Tags'},
                                            {value: 'tasks icon', text:'Tasks'},
                                            {value: 'terminal icon', text:'Terminal'},
                                            {value: 'text telephone icon', text:'Text Telephone'},
                                            {value: 'ticket icon', text:'Ticket'},
                                            {value: 'trophy icon', text:'Trophy'},
                                            {value: 'wifi icon', text:'Wifi'}
                                        ]
                                    },
                                    {
                                        type: 'listbox', 
                                        name: 'color', 
                                        label: 'Color', 
                                        'values': [
                                            {text: 'None', value: ''},
                                            {text: 'Black', value: 'black'},
                                            {text: 'Blue', value: 'blue'},
                                            {text: 'Green ', value: 'green'},
                                            {text: 'Orange ', value: 'orange'},
                                            {text: 'Pink ', value: 'pink'},
                                            {text: 'Purple ', value: 'purple'},
                                            {text: 'Red ', value: 'red'},
                                            {text: 'Teal ', value: 'teal'},
                                            {text: 'Yellow  ', value: 'yellow'}
                                        ]
                                    },
                                    {
                                        type: 'textbox',
                                        name: 'classes',
                                        label: 'Additional classes'
                                    }],
                                    onsubmit: function( e ) {
                                        editor.insertContent( '&#91;ss_icon icon="' + e.data.icon + '" class="' + e.data.classes + '" color="'+ e.data.color +'"&#93;');
                                    }
                                });
                            }       
                        }
                    ]
                },
                {
                    text: 'Elements 2',
                    value: '',
                    onclick: function() {
                        editor.insertContent(this.value());
                    },
                    menu: [
                            {
                                text: 'Image',
                                value: '',
                                onclick: function(e) {
                                    e.stopPropagation();
                                    editor.windowManager.open( {
                                        title: 'Insert image tag',
                                        body: [{
                                            type: 'textbox',
                                            name: 'img',
                                            label: 'Your Image Url'
                                        },
                                        {
                                            type: 'textbox',
                                            name: 'classes',
                                            label: 'Additional classes'
                                        },
                                        {
                                            type: 'textbox',
                                            name: 'link',
                                            label: 'Your Image Link'
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'sizes', 
                                            label: 'Size', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'Mini', value: 'mini'},
                                                {text: 'Tiny', value: 'tiny'},
                                                {text: 'Small', value: 'small'},
                                                {text: 'Medium', value: 'medium'},
                                                {text: 'Large', value: 'large'},
                                                {text: 'Big', value: 'big'},
                                                {text: 'Huge', value: 'huge'},
                                                {text: 'Massive', value: 'massive'}
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'color', 
                                            label: 'Color', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'Black', value: 'black'},
                                                {text: 'Blue', value: 'blue'},
                                                {text: 'Green ', value: 'green'},
                                                {text: 'Orange ', value: 'orange'},
                                                {text: 'Pink ', value: 'pink'},
                                                {text: 'Purple ', value: 'purple'},
                                                {text: 'Red ', value: 'red'},
                                                {text: 'Teal ', value: 'teal'},
                                                {text: 'Yellow  ', value: 'yellow'}
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'style', 
                                            label: 'Style', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'Hidden', value: 'hidden'},
                                                {text: 'Disabled', value: 'disabled'},
                                                {text: 'Avatar', value: 'avatar'},
                                                {text: 'Bordered', value: 'bordered'},
                                                {text: 'Rounded', value: 'rounded'},
                                                {text: 'Centered', value: 'centered'},
                                                {text: 'Left floated', value: 'left floated'},
                                                {text: 'Right floated', value: 'right floated'}
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'align', 
                                            label: 'Vertical align', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'Top aligned', value: 'top aligned'},
                                                {text: 'Middle aligned', value: 'middle aligned'},
                                                {text: 'Bottom aligned', value: 'bottom aligned'}
                                            ]
                                        }],
                                        onsubmit: function( e ) {
                                            editor.insertContent( '&#91;ss_image align="' + e.data.align + '" class="' + e.data.classes + '" link="'+ e.data.link +'" img="'+ e.data.img +'" style="'+   e.data.style +'" color="'+  e.data.color +'" size="'+ e.data.sizes +'"&#93;' );
                                        }
                                    });
                                }       
                            },
                            {
                                text: 'Input',
                                value: '',
                                onclick: function(e) {
                                    e.stopPropagation();
                                    editor.windowManager.open( {
                                        title: 'Insert input tag',
                                        body: [{
                                            type: 'textbox',
                                            name: 'placeholder',
                                            label: 'Your Input Placeholder'
                                        },
                                        {
                                            type: 'textbox',
                                            name: 'classes',
                                            label: 'Additional classes'
                                        },
                                        {
                                            type: 'textbox',
                                            name: 'name',
                                            label: 'Input type name'
                                        },
                                        {
                                            type: 'textbox',
                                            name: 'id',
                                            label: 'Input type id'
                                        },
                                        {
                                            type: 'textbox',
                                            name: 'label',
                                            label: 'Additional label or icon eg: search icon'
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'sizes', 
                                            label: 'Size', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'Mini', value: 'mini'},
                                                {text: 'Tiny', value: 'tiny'},
                                                {text: 'Small', value: 'small'},
                                                {text: 'Medium', value: 'medium'},
                                                {text: 'Large', value: 'large'},
                                                {text: 'Big', value: 'big'},
                                                {text: 'Huge', value: 'huge'},
                                                {text: 'Massive', value: 'massive'}
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'variation', 
                                            label: 'Variation', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'Transparent', value: 'transparent'},
                                                {text: 'Inverted', value: 'inverted'},
                                                {text: 'Fluid Icon ', value: 'fluid icon'},
                                                {text: 'Fluid Action ', value: 'fluid action'},
                                                {text: 'Focus', value: 'focus'},
                                                {text: 'Error', value: 'error'},
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'style', 
                                            label: 'Style', 
                                            'values': [
                                                {text: 'None', value: 'ui input'},
                                                {text: 'Loading', value: 'loading'},
                                                {text: 'Left Loading', value: 'left loading'},
                                                {text: 'Icon (above textbox is icon)', value: 'icon'},
                                                {text: 'Left Icon', value: 'left icon'},
                                                {text: 'Labeled', value: 'labeled'},
                                                {text: 'Corner Labeled', value: 'corner labeled'},
                                                {text: 'Right Labeled', value: 'right labeled'},
                                                {text: 'Action (button display)', value: 'action'},
                                                
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'type', 
                                            label: 'Input Type', 
                                            'values': [
                                                {text: 'Text', value: 'text'},
                                                {text: 'Email', value: 'email'},
                                                {text: 'Submit', value: 'submit'},
                                                {text: 'Number', value: 'number'},
                                                {text: 'Reset', value: 'reset'}
                                            ]
                                        }],
                                        onsubmit: function( e ) {
                                            editor.insertContent( '&#91;ss_input type="' + e.data.type + '" class="' + e.data.classes + '" label="'+ e.data.label +'" placeholder="'+ e.data.placeholder +'" style="'+   e.data.style +'" variation="'+  e.data.variation +'" size="'+ e.data.sizes +'" name="'+ e.data.name +'" id="'+ e.data.id +'"&#93;' );
                                        }
                                    });
                                }       
                            },
                            {
                                text: 'Label',
                                value: '',
                                onclick: function(e) {
                                    e.stopPropagation();
                                    editor.windowManager.open( {
                                        title: 'Insert label tag',
                                        body: [{
                                            type: 'textbox',
                                            name: 'label',
                                            label: 'Your Label text'
                                        },
                                        {
                                            type: 'textbox',
                                            name: 'classes',
                                            label: 'Additional classes'
                                        },
                                        {
                                            type: 'textbox',
                                            name: 'link',
                                            label: 'Additional link providing'
                                        },
                                        {
                                            type: 'textbox',
                                            name: 'img',
                                            label: 'Image url'
                                        },
                                        {
                                            type: 'textbox',
                                            name: 'icon',
                                            label: 'Additional icon eg:( search icon )'
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'sizes', 
                                            label: 'Size', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'Mini', value: 'mini'},
                                                {text: 'Tiny', value: 'tiny'},
                                                {text: 'Small', value: 'small'},
                                                {text: 'Medium', value: 'medium'},
                                                {text: 'Large', value: 'large'},
                                                {text: 'Big', value: 'big'},
                                                {text: 'Huge', value: 'huge'},
                                                {text: 'Massive', value: 'massive'}
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'sequence', 
                                            label: 'Arrange Label icon image sequence', 
                                            'values': [
                                                {text: 'Label | Icon | Image', value: 's1'},
                                                {text: 'Icon | Image | Label', value: 's2'},
                                                {text: 'Image | Label | Icon', value: 's3'},
                                                {text: 'Label | Image | Icon', value: 's4'},
                                                {text: 'Image | Icon |Label ', value: 's5'},
                                                {text: 'Icon |Label | Image', value: 's6'},
                                                {text: 'Icon | Label (image url is blank)', value: 's7'},
                                                {text: 'Label | Icon (image url is blank)', value: 's8'},
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'attached', 
                                            label: 'Label attached', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'Top ', value: 'top attached'},
                                                {text: 'Bottom', value: 'bottom attached'},
                                                {text: 'Top Right', value: 'top right attached'},
                                                {text: 'Top Left ', value: 'top left attached'},
                                                {text: 'Bottom Left', value: 'bottom left attached'},
                                                 {text: 'Bottom Right', value: 'bottom right attached'},
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'color', 
                                            label: 'Color', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'Black', value: 'black'},
                                                {text: 'Blue', value: 'blue'},
                                                {text: 'Green ', value: 'green'},
                                                {text: 'Orange ', value: 'orange'},
                                                {text: 'Pink ', value: 'pink'},
                                                {text: 'Purple ', value: 'purple'},
                                                {text: 'Red ', value: 'red'},
                                                {text: 'Teal ', value: 'teal'},
                                                {text: 'Yellow  ', value: 'yellow'}
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'style', 
                                            label: 'Style', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'Tag', value: 'tag'},
                                                {text: 'Ribbon', value: 'ribbon'},
                                                {text: 'circular ', value: 'circular '},
                                                {text: 'floating ', value: 'floating '},              
                                            ]
                                        }
                                        ],
                                        onsubmit: function( e ) {
                                            editor.insertContent( '&#91;ss_label icon="' + e.data.icon + '" class="' + e.data.classes + '" label="'+ e.data.label +'" img="'+ e.data.img +'" style="'+   e.data.style +'" sequence="'+  e.data.sequence +'" size="'+ e.data.sizes +'" attached="'+ e.data.attached +'" color="'+ e.data.color +'" link="'+ e.data.link +'"&#93;' );
                                        }
                                    });
                                }       
                            },
                            {
                                text: 'List',
                                value: '',
                                onclick: function(e) {
                                    e.stopPropagation();
                                    editor.windowManager.open( {
                                        title: 'Insert list tag',
                                        body: [
                                        {
                                            type: 'textbox',
                                            name: 'classes',
                                            label: 'Additional classes'
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'sizes', 
                                            label: 'Size', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'Mini', value: 'mini'},
                                                {text: 'Tiny', value: 'tiny'},
                                                {text: 'Small', value: 'small'},
                                                {text: 'Medium', value: 'medium'},
                                                {text: 'Large', value: 'large'},
                                                {text: 'Big', value: 'big'},
                                                {text: 'Huge', value: 'huge'},
                                                {text: 'Massive', value: 'massive'}
                                            ]
                                        },                                       
                                        {
                                            type: 'listbox', 
                                            name: 'type', 
                                            label: 'List type', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'List', value: 'list'},
                                                {text: 'Bulleted', value: ' bulleted'},
                                                {text: 'Ordered', value: 'ordered'},
                                                {text: 'Link', value: 'link'},
                                            ]
                                        },
                                        
                                        {
                                            type: 'listbox', 
                                            name: 'variations', 
                                            label: 'Variations', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'Horizontal', value: 'horizontal'},
                                                {text: 'Inverted', value: 'inverted'},
                                                {text: 'Selection', value: 'selection'},
                                                {text: 'Animated', value: 'animated'},
                                                {text: 'Relaxed', value: 'relaxed'}, 
                                                {text: 'Divided', value: 'divided'}, 
                                                {text: 'Celled', value: 'celled'},              
                                            ]
                                        }
                                        ],
                                        onsubmit: function( e ) {
                                            editor.insertContent( '&#91;ss_list variations="' + e.data.variations + '" class="' + e.data.classes + '" type="'+ e.data.type +'" size="'+ e.data.sizes +'"&#93;&#91;ss_list_item&#93;add list item 1 content &#91;&#47;ss_list_item&#93;&#91;ss_list_item&#93;add list item 2 content &#91;&#47;ss_list_item&#93;&#91;ss_list_item&#93;add list item 3 content &#91;&#47;ss_list_item&#93;&#91;&#47;ss_list&#93;' );
                                        }
                                    });
                                }       
                            },
                            {
                                text: 'Reveal',
                                value: '',
                                onclick: function(e) {
                                    e.stopPropagation();
                                    editor.windowManager.open( {
                                        title: 'Insert reveal tag',
                                        body: [
                                        {
                                            type: 'textbox',
                                            name: 'classes',
                                            label: 'Additional classes'
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'type', 
                                            label: 'Type', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'Circular', value: 'circular'},
                                                {text: 'Fade', value: 'fade '},
                                                {text: 'Move', value: 'move '},
                                                {text: 'Move Right', value: 'move right'},
                                                {text: 'Move Up', value: 'move up'}, 
                                                {text: 'Move Down', value: 'move down'}, 
                                                {text: 'Circular Rotate', value: 'circular rotate'}, 
                                                {text: 'Circular Rotate Left', value: 'circular rotate left'},
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'variations', 
                                            label: 'Variations', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'Masked', value: 'masked'},
                                                {text: 'Instant', value: 'instant'},
                                                {text: 'Disabled', value: 'disabled'},
                                                
                                            ]
                                        }
                                        ],
                                        onsubmit: function( e ) {
                                            editor.insertContent( '&#91;ss_reveal variations="' + e.data.variations + '" class="' + e.data.classes + '" type="'+ e.data.type +'"&#93;&#91;ss_reveal_show&#93;add show content &#91;&#47;ss_reveal_show&#93;&#91;ss_reveal_hide&#93;add hidden content &#91;&#47;ss_reveal_hide&#93;&#91;&#47;ss_reveal&#93;' );
                                        }
                                    });
                                }       
                            },
                            ]
                },
                {
                    text: 'Collections',
                    value: '',
                    onclick: function() {
                        editor.insertContent(this.value());
                    },
                    menu: [
                            {
                                text: 'Grid',
                                value: '',
                                onclick: function(e) {
                                    e.stopPropagation();
                                    editor.windowManager.open( {
                                        title: 'Insert grid tag',
                                        body: [
                                        {
                                            type: 'textbox',
                                            name: 'classes',
                                            label: 'Additional classes'
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'columns', 
                                            label: 'Select how many columns', 
                                            'values': [
                                                {text: 'One', value: '1'},
                                                {text: 'Two', value: '2'},
                                                {text: 'Three', value: '3'},
                                                {text: 'Four', value: '4'},
                                                {text: 'Five', value: '5'},
                                                {text: 'Six', value: '6'},
                                                {text: 'Seven', value: '7'},
                                                {text: 'Eight', value: '8'}
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'column1', 
                                            label: 'Select first column', 
                                            'values': [
                                                {text: 'One wide column', value: '1'},
                                                {text: 'Two wide column', value: '2'},
                                                {text: 'Three wide column', value: '3'},
                                                {text: 'Four wide column', value: '4'},
                                                {text: 'Five wide column', value: '5'},
                                                {text: 'Six wide column', value: '6'},
                                                {text: 'Seven wide column', value: '7'},
                                                {text: 'Eight wide column', value: '8'},
                                                {text: 'Nine wide column', value: '9'},
                                                {text: 'Ten wide column', value: '10'},
                                                {text: 'Eleven wide column', value: '11'},
                                                {text: 'Twelve wide column', value: '12'},
                                                {text: 'Thirteen wide column', value: '13'},
                                                {text: 'Fourteen wide column', value: '14'},
                                                {text: 'Fifteen wide column', value: '15'},
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'column2', 
                                            label: 'Select second column', 
                                            'values': [
                                                 {text: 'One wide column', value: '1'},
                                                {text: 'Two wide column', value: '2'},
                                                {text: 'Three wide column', value: '3'},
                                                {text: 'Four wide column', value: '4'},
                                                {text: 'Five wide column', value: '5'},
                                                {text: 'Six wide column', value: '6'},
                                                {text: 'Seven wide column', value: '7'},
                                                {text: 'Eight wide column', value: '8'},
                                                {text: 'Nine wide column', value: '9'},
                                                {text: 'Ten wide column', value: '10'},
                                                {text: 'Eleven wide column', value: '11'},
                                                {text: 'Twelve wide column', value: '12'},
                                                {text: 'Thirteen wide column', value: '13'},
                                                {text: 'Fourteen wide column', value: '14'},
                                                {text: 'Fifteen wide column', value: '15'},
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'column3', 
                                            label: 'Select third column', 
                                            'values': [
                                                 {text: 'One wide column', value: '1'},
                                                {text: 'Two wide column', value: '2'},
                                                {text: 'Three wide column', value: '3'},
                                                {text: 'Four wide column', value: '4'},
                                                {text: 'Five wide column', value: '5'},
                                                {text: 'Six wide column', value: '6'},
                                                {text: 'Seven wide column', value: '7'},
                                                {text: 'Eight wide column', value: '8'},
                                                {text: 'Nine wide column', value: '9'},
                                                {text: 'Ten wide column', value: '10'},
                                                {text: 'Eleven wide column', value: '11'},
                                                {text: 'Twelve wide column', value: '12'},
                                                {text: 'Thirteen wide column', value: '13'},
                                                {text: 'Fourteen wide column', value: '14'},
                                                {text: 'Fifteen wide column', value: '15'},
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'column4', 
                                            label: 'Select fourth column', 
                                            'values': [
                                                 {text: 'One wide column', value: '1'},
                                                {text: 'Two wide column', value: '2'},
                                                {text: 'Three wide column', value: '3'},
                                                {text: 'Four wide column', value: '4'},
                                                {text: 'Five wide column', value: '5'},
                                                {text: 'Six wide column', value: '6'},
                                                {text: 'Seven wide column', value: '7'},
                                                {text: 'Eight wide column', value: '8'},
                                                {text: 'Nine wide column', value: '9'},
                                                {text: 'Ten wide column', value: '10'},
                                                {text: 'Eleven wide column', value: '11'},
                                                {text: 'Twelve wide column', value: '12'},
                                                {text: 'Thirteen wide column', value: '13'},
                                                {text: 'Fourteen wide column', value: '14'},
                                                {text: 'Fifteen wide column', value: '15'},
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'column5', 
                                            label: 'Select fifth column', 
                                            'values': [
                                                 {text: 'One wide column', value: '1'},
                                                {text: 'Two wide column', value: '2'},
                                                {text: 'Three wide column', value: '3'},
                                                {text: 'Four wide column', value: '4'},
                                                {text: 'Five wide column', value: '5'},
                                                {text: 'Six wide column', value: '6'},
                                                {text: 'Seven wide column', value: '7'},
                                                {text: 'Eight wide column', value: '8'},
                                                {text: 'Nine wide column', value: '9'},
                                                {text: 'Ten wide column', value: '10'},
                                                {text: 'Eleven wide column', value: '11'},
                                                {text: 'Twelve wide column', value: '12'},
                                                {text: 'Thirteen wide column', value: '13'},
                                                {text: 'Fourteen wide column', value: '14'},
                                                {text: 'Fifteen wide column', value: '15'},
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'column6', 
                                            label: 'Select sixth column', 
                                            'values': [
                                                {text: 'One wide column', value: '1'},
                                                {text: 'Two wide column', value: '2'},
                                                {text: 'Three wide column', value: '3'},
                                                {text: 'Four wide column', value: '4'},
                                                {text: 'Five wide column', value: '5'},
                                                {text: 'Six wide column', value: '6'},
                                                {text: 'Seven wide column', value: '7'},
                                                {text: 'Eight wide column', value: '8'},
                                                {text: 'Nine wide column', value: '9'},
                                                {text: 'Ten wide column', value: '10'},
                                                {text: 'Eleven wide column', value: '11'},
                                                {text: 'Twelve wide column', value: '12'},
                                                {text: 'Thirteen wide column', value: '13'},
                                                {text: 'Fourteen wide column', value: '14'},
                                                {text: 'Fifteen wide column', value: '15'},
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'column7', 
                                            label: 'Select seventh column', 
                                            'values': [
                                                {text: 'One wide column', value: '1'},
                                                {text: 'Two wide column', value: '2'},
                                                {text: 'Three wide column', value: '3'},
                                                {text: 'Four wide column', value: '4'},
                                                {text: 'Five wide column', value: '5'},
                                                {text: 'Six wide column', value: '6'},
                                                {text: 'Seven wide column', value: '7'},
                                                {text: 'Eight wide column', value: '8'},
                                                {text: 'Nine wide column', value: '9'},
                                                {text: 'Ten wide column', value: '10'},
                                                {text: 'Eleven wide column', value: '11'},
                                                {text: 'Twelve wide column', value: '12'},
                                                {text: 'Thirteen wide column', value: '13'},
                                                {text: 'Fourteen wide column', value: '14'},
                                                {text: 'Fifteen wide column', value: '15'},
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'column8', 
                                            label: 'Select eight column', 
                                            'values': [
                                                {text: 'One wide column', value: '1'},
                                                {text: 'Two wide column', value: '2'},
                                                {text: 'Three wide column', value: '3'},
                                                {text: 'Four wide column', value: '4'},
                                                {text: 'Five wide column', value: '5'},
                                                {text: 'Six wide column', value: '6'},
                                                {text: 'Seven wide column', value: '7'},
                                                {text: 'Eight wide column', value: '8'},
                                                {text: 'Nine wide column', value: '9'},
                                                {text: 'Ten wide column', value: '10'},
                                                {text: 'Eleven wide column', value: '11'},
                                                {text: 'Twelve wide column', value: '12'},
                                                {text: 'Thirteen wide column', value: '13'},
                                                {text: 'Fourteen wide column', value: '14'},
                                                {text: 'Fifteen wide column', value: '15'},
                                            ]
                                        },
                                        ],
                                        onsubmit: function( e ) {
                                            if(e.data.columns == 1 ){
                                                editor.insertContent( '&#91;ss_grid class="' + e.data.classes + '"&#93;&#91;ss_col row="' + e.data.column1 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;&#47;ss_grid&#93;' );
                                            } else if(e.data.columns == 2 ){
                                                editor.insertContent( '&#91;ss_grid class="' + e.data.classes + '"&#93;&#91;ss_col row="' + e.data.column1 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column2 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;&#47;ss_grid&#93;' );
                                            } else if(e.data.columns == 3 ){
                                                editor.insertContent( '&#91;ss_grid class="' + e.data.classes + '"&#93;&#91;ss_col row="' + e.data.column1 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column2 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column3 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;&#47;ss_grid&#93;' );
                                            } else if(e.data.columns == 4 ){
                                                editor.insertContent( '&#91;ss_grid class="' + e.data.classes + '"&#93;&#91;ss_col row="' + e.data.column1 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column2 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column3 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column4 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;&#47;ss_grid&#93;' );
                                            } else if(e.data.columns == 5 ){
                                                editor.insertContent( '&#91;ss_grid class="' + e.data.classes + '"&#93;&#91;ss_col row="' + e.data.column1 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column2 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column3 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column4 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column5 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;&#47;ss_grid&#93;' );
                                            } else if(e.data.columns == 6 ){
                                                editor.insertContent( '&#91;ss_grid class="' + e.data.classes + '"&#93;&#91;ss_col row="' + e.data.column1 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column2 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column3 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column4 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column5 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column6 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;&#47;ss_grid&#93;' );
                                            } else if(e.data.columns == 7 ){
                                                editor.insertContent( '&#91;ss_grid class="' + e.data.classes + '"&#93;&#91;ss_col row="' + e.data.column1 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column2 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column3 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column4 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column5 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column6 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column7 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;&#47;ss_grid&#93;' );
                                            } else if(e.data.columns == 8 ){
                                                editor.insertContent( '&#91;ss_grid class="' + e.data.classes + '"&#93;&#91;ss_col row="' + e.data.column1 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column2 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column3 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column4 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column5 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column6 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column7 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;ss_col row="' + e.data.column8 +'"&#93;add content here.. &#91;&#47;ss_col&#93;&#91;&#47;ss_grid&#93;' );
                                            }
                                        }
                                    });
                                }       
                            },
                            {
                                text: 'Message',
                                value: '',
                                onclick: function(e) {
                                    e.stopPropagation();
                                    editor.windowManager.open( {
                                        title: 'Insert message tag',
                                        body: [
                                        {
                                            type: 'textbox',
                                            name: 'classes',
                                            label: 'Additional classes'
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'type', 
                                            label: 'Type', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'Warning', value: 'warning'},
                                                {text: 'Info', value: 'info'},
                                                {text: 'Success', value: 'success'},
                                                {text: 'Error', value: 'error'},
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'attached', 
                                            label: 'Message attached', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'Top ', value: 'top attached'},
                                                {text: 'Bottom', value: 'bottom attached'},
                                                {text: 'Top Right', value: 'top right attached'},
                                                {text: 'Top Left ', value: 'top left attached'},
                                                {text: 'Bottom Left', value: 'bottom left attached'},
                                                 {text: 'Bottom Right', value: 'bottom right attached'},
                                            ]
                                        },
                                        ],
                                        onsubmit: function( e ) {
                                            editor.insertContent( '&#91;ss_message attached="' + e.data.attached + '" class="' + e.data.classes + '" type="'+ e.data.type +'"&#93;Add message here...&#91;&#47;ss_message&#93;' );
                                        }
                                    });
                                }       
                            },
                            ]
                },
                {
                    text: 'Modules',
                    value: '',
                    onclick: function() {
                        editor.insertContent(this.value());
                    },
                    menu: [
                            {
                                text: 'Accordion',
                                value: '',
                                onclick: function(e) {
                                    e.stopPropagation();
                                    editor.windowManager.open( {
                                        title: 'Insert accordioan tag',
                                        body: [
                                        {
                                            type: 'textbox',
                                            name: 'classes',
                                            label: 'Additional classes'
                                        },                                        
                                        {
                                            type: 'listbox', 
                                            name: 'variations', 
                                            label: 'Variations', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'Menu', value: 'menu'},
                                                {text: 'Fluid', value: 'fluid'},
                                                {text: 'Styled', value: 'styled'},
                                                
                                            ]
                                        }
                                        ],
                                        onsubmit: function( e ) {
                                            editor.insertContent( '&#91;ss_accordioan variations="' + e.data.variations + '" class="' + e.data.classes + '"&#93;&#91;ss_item variations="' + e.data.variations + '" href="" title="Enter title here.." active="yes"&#93;add content here...&#91;&#47;ss_item&#93;&#91;ss_item variations="' + e.data.variations + '" href="" title="Enter title here.." active="no"&#93;add content here...&#91;&#47;ss_item&#93;&#91;&#47;ss_accordioan&#93;' );
                                        }
                                    });
                                }       
                            },
                            {
                                text: 'Tab',
                                value: '',
                                onclick: function(e) {
                                    e.stopPropagation();
                                    editor.windowManager.open( {
                                        title: 'Insert tab tag',
                                        body: [
                                        {
                                            type: 'textbox',
                                            name: 'classes',
                                            label: 'Additional classes'
                                        },                                        
                                        {
                                            type: 'listbox', 
                                            name: 'variations', 
                                            label: 'Variations', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'Secondary Menu', value: 'secondary'},
                                                {text: 'Attached Tabular', value: 'tabular'},
                                            ]
                                        }
                                        ],
                                        onsubmit: function( e ) {
                                            if(e.data.variations == "secondary" ){
                                                editor.insertContent( '&#91;ss_tab class="' + e.data.classes + '"&#93;&#91;ss_tab_title variations="' + e.data.variations + '"  activeno="1"&#93;Title 1,Title 2&#91;&#47;ss_tab_title&#93;&#91;ss_tab_content variations="' + e.data.variations + '" title="Title 1" active="yes"&#93;add content 1 here...&#91;&#47;ss_tab_content&#93;&#91;ss_tab_content variations="' + e.data.variations + '" title="Title 2" active="no"&#93;add content 2 here...&#91;&#47;ss_tab_content&#93;&#91;&#47;ss_tab&#93;' );
                                            } else if(e.data.variations == "tabular" ){
                                                editor.insertContent( '&#91;ss_tab class="' + e.data.classes + '"&#93;&#91;ss_tab_title variations="' + e.data.variations + '"  activeno="1"&#93;Title 1,Title 2&#91;&#47;ss_tab_title&#93;&#91;ss_tab_content variations="' + e.data.variations + '" title="Title 1" active="yes"&#93;add content 1 here...&#91;&#47;ss_tab_content&#93;&#91;ss_tab_content variations="' + e.data.variations + '" title="Title 2" active="no"&#93;add content 2 here...&#91;&#47;ss_tab_content&#93;&#91;&#47;ss_tab&#93;' );
                                            } else{
                                                editor.insertContent( '&#91;ss_tab class="' + e.data.classes + '"&#93;&#91;ss_tab_title variations="' + e.data.variations + '"  activeno="1"&#93;Title 1,Title 2&#91;&#47;ss_tab_title&#93;&#91;ss_tab_content variations="' + e.data.variations + '" title="Title 1" active="yes"&#93;add content 1 here...&#91;&#47;ss_tab_content&#93;&#91;ss_tab_content variations="' + e.data.variations + '" title="Title 2" active="no"&#93;add content 2 here...&#91;&#47;ss_tab_content&#93;&#91;&#47;ss_tab&#93;' );
                                            }
                                            
                                        }
                                    });
                                }       
                            },
                            {
                                text: 'Transition',
                                value: '',
                                onclick: function(e) {
                                    e.stopPropagation();
                                    editor.windowManager.open( {
                                        title: 'Insert transition tag',
                                        body: [
                                        {
                                            type: 'textbox',
                                            name: 'classes',
                                            label: 'Additional class'
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'animation', 
                                            label: 'Animation', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'Scale', value: 'Scale'},
                                                {text: 'fade', value: 'fade'},
                                                {text: 'flip', value: 'flip'},
                                                {text: 'drop', value: 'drop'},
                                                {text: 'fly', value: 'fly'},
                                                {text: 'swing', value: 'swing'},
                                                {text: 'browse', value: 'browse'},
                                                {text: 'slide', value: 'slide'},
                                                {text: 'jiggle', value: 'jiggle'},
                                                {text: 'flash', value: 'flash'},
                                                {text: 'shake', value: 'shake'},
                                                {text: 'pulse', value: 'pulse'},
                                                {text: 'tada', value: 'tada'},
                                                {text: 'bounce', value: 'bounce'},
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'direction', 
                                            label: 'Use for(fade,fly,swing,browse,slide)', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'Up', value: 'up'},
                                                {text: 'down', value: 'down'},
                                                {text: 'left', value: 'left'},
                                                {text: 'right', value: 'right'},
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'action', 
                                            label: 'Use for(flip)', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: 'vertical ', value: 'vertical'},
                                                {text: 'horizontal', value: 'horizontal'},
                                            ]
                                        },
                                        {
                                            type: 'listbox', 
                                            name: 'duration', 
                                            label: 'Duration', 
                                            'values': [
                                                {text: 'None', value: ''},
                                                {text: '1 second ', value: '1s'},
                                                {text: '2 second', value: '2s'},
                                                {text: '3 second', value: '3s'},
                                                {text: '4 second', value: '4s'},
                                                {text: '5 second', value: '5s'},
                                                {text: '6 second', value: '6s'},
                                                {text: '7 second', value: '7s'},
                                            ]
                                        }                                       
                                        ],
                                        onsubmit: function( e ) {
                                            editor.insertContent( '&#91;ss_transition class="' + e.data.classes + '" animation="'+   e.data.animation +'" direction="'+  e.data.direction +'" action="'+ e.data.action +'" duration="'+ e.data.duration +'"&#93; Add content here... &#91;&#47;ss_transition&#93;' );
                                        }
                                    });
                                }       
                            },
                            ]
                }
           ]
        });
    });
})();