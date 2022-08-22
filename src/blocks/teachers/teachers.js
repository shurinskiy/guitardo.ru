import { selectTweaker } from "../../js/lib";

(() => {
	selectTweaker(document.querySelectorAll('.teachers__control_dir'), 'select', 'Направление');
	selectTweaker(document.querySelectorAll('.teachers__control_gen'), 'select', 'Мужчина/женщина');

})();
