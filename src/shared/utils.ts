export function isEmpty(obj: {}) {
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) return false;
	}
	return true;
}

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
export function getRandomInt(min: number, max: number) {
	return Math.floor(Math.random() * (max - min)) + min;
}
