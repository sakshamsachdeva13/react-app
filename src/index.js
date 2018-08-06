import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const data = {"title":"Form Title","steps":[{"title":"step title 1","inputs":[{"name":"textarea_name_1","label":"Textarea label 1","type":"textarea"},{"name":"textarea_name_2","label":"Textarea label 2","type":"textarea"},{"name":"checkbox_name_3","label":"Checkbox label 3","type":"checkbox","values":[{"label":"checkbox value 0","value":1,"default_value":true},{"label":"checkbox value 1","value":2,"default_value":true}]},{"name":"checkbox_name_4","label":"Checkbox label 4","type":"checkbox","values":[{"label":"checkbox value 0","value":1,"default_value":true},{"label":"checkbox value 1","value":2,"default_value":false},{"label":"checkbox value 2","value":3,"default_value":false}]},{"name":"input_name_5","label":"Input label 5","type":"input","characterstics":{"type":"number","min":277,"max":6825}}]},{"title":"step title 2","inputs":[{"name":"textarea_name_1","label":"Textarea label 1","type":"textarea"}]},{"title":"step title 3","inputs":[{"name":"checkbox_name_1","label":"Checkbox label 1","type":"checkbox","values":[{"label":"checkbox value 0","value":1,"default_value":false},{"label":"checkbox value 1","value":2,"default_value":false},{"label":"checkbox value 2","value":3,"default_value":false}]},{"name":"radio_name_2","label":"Radio label 2","type":"radio","values":[{"label":"radio value 0","value":1,"default_value":false},{"label":"radio value 1","value":2,"default_value":true},{"label":"radio value 2","value":3,"default_value":false},{"label":"radio value 3","value":4,"default_value":true}]},{"name":"radio_name_3","label":"Radio label 3","type":"radio","values":[{"label":"radio value 0","value":1,"default_value":true},{"label":"radio value 1","value":2,"default_value":false}]},{"name":"radio_name_4","label":"Radio label 4","type":"radio","values":[{"label":"radio value 0","value":1,"default_value":true},{"label":"radio value 1","value":2,"default_value":true}]}]},{"title":"step title 4","inputs":[{"name":"radio_name_1","label":"Radio label 1","type":"radio","values":[{"label":"radio value 0","value":1,"default_value":false},{"label":"radio value 1","value":2,"default_value":true}]},{"name":"textarea_name_2","label":"Textarea label 2","type":"textarea"}]},{"title":"step title 5","inputs":[{"name":"checkbox_name_1","label":"Checkbox label 1","type":"checkbox","values":[{"label":"checkbox value 0","value":1,"default_value":true},{"label":"checkbox value 1","value":2,"default_value":true},{"label":"checkbox value 2","value":3,"default_value":true},{"label":"checkbox value 3","value":4,"default_value":false}]},{"name":"textarea_name_2","label":"Textarea label 2","type":"textarea"}]}]}
ReactDOM.render(<App data = {data}/>, document.getElementById('root'));
registerServiceWorker();
