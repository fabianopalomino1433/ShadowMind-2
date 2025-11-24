export interface AgentTemplate {
  id: string;
  title: string;
  objective: string;
  investigationType: string;
  estimatedTime: string;
  collectionMethod: string;
  populationOfInterest: string;
  preliminaryEvidence: string;
  keyAreasToInvestigate: string;
  firstImpressions?: string; // Optional for "Muestreo Rápido"
  possibleHypotheses?: string; // Optional for "Investigación Inicial o Exploratoria"
  possibleConclusions?: string; // Optional for "Investigación Profunda o Exhaustiva"
  fieldEvidence?: string; // Optional for "Investigación de Campo"
  digitalEvidence?: string; // Optional for "Investigación Digital o Cibernética"
  contextEvidence?: string; // Optional for "Investigación de Contexto Histórico o Social"
  predefinedPrompt: string;
}

export const agentTemplates: AgentTemplate[] = [
  {
    id: "muestreo-rapido",
    title: "Perfil de Investigación: Muestreo Rápido",
    objective: "Realizar una recolección preliminar de datos con el fin de obtener una visión general y rápida del caso.",
    investigationType: "Muestreo rápido",
    estimatedTime: "[X horas/días]",
    collectionMethod: "[Entrevistas iniciales, observación rápida, revisión de documentos clave]",
    populationOfInterest: "[Número de testigos, víctimas, sospechosos clave]",
    preliminaryEvidence: "[Lista de evidencias encontradas o testigos entrevistados]",
    keyAreasToInvestigate: "[Indicaciones sobre qué áreas del caso necesitan más detalles: escena del crimen, patrones de comportamiento, antecedentes criminales, etc.]",
    firstImpressions: "[Notas iniciales sobre tendencias o patrones emergentes]",
    predefinedPrompt: "Realiza un muestreo rápido de la información disponible sobre el caso. Recoge datos clave sobre testigos, víctimas y sospechosos. ¿Qué patrones o anomalías emergen en las primeras entrevistas o revisiones de documentos? Proporciona una visión general de las posibles líneas de investigación.",
  },
  {
    id: "investigacion-inicial",
    title: "Perfil de Investigación: Investigación Inicial o Exploratoria",
    objective: "Ampliar el análisis preliminar, comenzando a profundizar en detalles clave y buscando conexiones relevantes.",
    investigationType: "Investigación inicial",
    estimatedTime: "[X días/semanas]",
    collectionMethod: "[Entrevistas detalladas, análisis forense preliminar, revisión de antecedentes, análisis de patrones de comportamiento]",
    populationOfInterest: "[Grupo de testigos clave, expertos consultados, análisis de redes de relaciones]",
    preliminaryEvidence: "[Confirmación de evidencias clave encontradas en el muestreo rápido]",
    keyAreasToInvestigate: "[Profundizar en los motivos posibles, perfiles de los sospechosos, conexiones entre las partes involucradas]",
    possibleHypotheses: "[Teorías iniciales basadas en los primeros datos, como posibles móviles o conexiones]",
    predefinedPrompt: "Realiza una investigación más profunda sobre las conexiones entre los testigos, la víctima y los sospechosos. Revisa los antecedentes de todos los involucrados y haz una lista de los posibles motivos detrás del crimen. ¿Qué nuevas pistas o patrones surgen al profundizar en los detalles?",
  },
  {
    id: "investigacion-profunda",
    title: "Perfil de Investigación: Investigación Profunda o Exhaustiva",
    objective: "Realizar un análisis detallado, integrando todas las evidencias y testigos, para llegar a conclusiones sólidas y bien fundamentadas.",
    investigationType: "Investigación profunda",
    estimatedTime: "[X semanas/meses]",
    collectionMethod: "[Entrevistas exhaustivas, análisis forense avanzado, revisión completa de evidencia digital, pruebas científicas detalladas]",
    populationOfInterest: "[Análisis de todos los involucrados, posibles conexiones entre grupos]",
    preliminaryEvidence: "[Lista completa de evidencia procesada, pruebas científicas y forenses]",
    keyAreasToInvestigate: "[Profundización en los detalles del crimen, análisis psicológico de los sospechosos, reconstrucción de los hechos]",
    possibleConclusions: "[Teorías que deben ser validadas con evidencia]",
    predefinedPrompt: "Profundiza en los datos y evidencia recolectada hasta ahora. Realiza un análisis detallado de las pruebas forenses y de comportamiento. ¿Qué patrones finales se pueden establecer? ¿Existen pruebas irrefutables que vinculen a un sospechoso con el crimen?",
  },
  {
    id: "investigacion-campo",
    title: "Perfil de Investigación: Investigación de Campo",
    objective: "Recolectar datos en el lugar de los hechos, entrevistando a personas clave y observando el entorno en el que ocurrió el crimen.",
    investigationType: "Investigación de campo",
    estimatedTime: "[X días/semanas]",
    collectionMethod: "[Observación directa, entrevistas con testigos y personas cercanas al lugar, análisis de la escena del crimen]",
    populationOfInterest: "N/A", // Not explicitly mentioned in the template, so setting to N/A
    preliminaryEvidence: "[Pruebas físicas y testimoniales, fotografías, videos]",
    keyAreasToInvestigate: "[Condiciones del lugar, interacción con la comunidad local, observación de comportamientos inusuales o fuera de lugar]",
    fieldEvidence: "[Pruebas físicas y testimoniales, fotografías, videos]",
    predefinedPrompt: "Recoge todos los datos disponibles en la escena del crimen y entrevista a los testigos cercanos. ¿Qué detalles no reportados previamente se pueden descubrir en el lugar? ¿Hay evidencias físicas o testimoniales que puedan cambiar la dirección de la investigación?",
  },
  {
    id: "investigacion-digital",
    title: "Perfil de Investigación: Investigación Digital o Cibernética",
    objective: "Analizar la información digital disponible, incluidas las comunicaciones, redes sociales y cualquier evidencia relacionada con dispositivos electrónicos.",
    investigationType: "Investigación digital",
    estimatedTime: "[X días/semanas]",
    collectionMethod: "[Análisis forense digital, revisión de correos electrónicos, mensajes de texto, redes sociales, registros de llamadas, ubicación GPS]",
    populationOfInterest: "N/A", // Not explicitly mentioned in the template, so setting to N/A
    preliminaryEvidence: "[Pantallazos de mensajes, correos, registros de actividad, fotos/videos digitales]",
    keyAreasToInvestigate: "[Comportamiento digital de los sospechosos y víctimas, patrones de comunicación, ubicaciones y movimientos]",
    digitalEvidence: "[Pantallazos de mensajes, correos, registros de actividad, fotos/videos digitales]",
    predefinedPrompt: "Realiza un análisis exhaustivo de los dispositivos digitales involucrados en el caso. Examina los registros de comunicaciones y localización. ¿Existen patrones ocultos en los mensajes o las actividades en redes sociales que puedan vincular a los sospechosos con el crimen?",
  },
  {
    id: "investigacion-contexto",
    title: "Perfil de Investigación: Investigación de Contexto Histórico o Social",
    objective: "Analizar el contexto histórico, social y cultural del caso, considerando factores externos que puedan haber influido en el crimen.",
    investigationType: "Investigación de contexto",
    estimatedTime: "[X semanas]",
    collectionMethod: "[Investigación de antecedentes, análisis de tendencias sociales y culturales, entrevistas con expertos o historiadores]",
    populationOfInterest: "N/A", // Not explicitly mentioned in the template, so setting to N/A
    preliminaryEvidence: "[Estudios previos sobre la zona, investigaciones anteriores sobre el tipo de crimen, entrevistas con expertos]",
    keyAreasToInvestigate: "[Contexto histórico del crimen, relaciones entre grupos sociales, tensiones políticas o sociales relacionadas con el caso]",
    contextEvidence: "[Estudios previos sobre la zona, investigaciones anteriores sobre el tipo de crimen, entrevistas con expertos]",
    predefinedPrompt: "Investiga el contexto social y cultural en el que ocurrió el crimen. ¿Existen factores históricos o sociales que puedan haber influido en las personas involucradas? ¿El crimen refleja alguna tendencia más amplia en la comunidad o sociedad?",
  },
];
