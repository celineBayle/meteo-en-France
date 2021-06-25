export const getHueFromTemperature = (temperature: number): number => {
    let limitedTemperature = temperature;

    // je borne notre temperature entre 2 valeurs extremes
    const min = 0;
    const max = 30;
    limitedTemperature = Math.max(min, limitedTemperature);
    limitedTemperature = Math.min(max, limitedTemperature);
  
    // calcul d'un pourcentage -20° -> 0 et 30° -> 100
    limitedTemperature = limitedTemperature - min;
    const percent = limitedTemperature * 100 / (max - min);
  
    const hueMax = 0;
    const hueMin = 230;
  
    // je remet le pourcentage dans un intervalle donné ici de 230(bleu) à 0(rouge)
    const hue = hueMin - (percent * (hueMin - hueMax) / 100);
  
    return hue;
};

export const realfeel = (temperature: number): string => {    
        if(temperature <  15 ) {
            return  "froid";
        } else if(temperature > 15 && temperature < 25) {
            return  "doux";     
        } else if(temperature > 25) {
            return "chaud";
        }  
};

