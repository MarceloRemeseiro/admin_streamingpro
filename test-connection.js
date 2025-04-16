// Script para verificar la conexión al servidor de StreamingPro
const https = require('https');
const http = require('http');

const URL_TO_TEST = 'https://central.streamingpro.es/api/devices/register';
const LOCAL_URL = 'http://192.168.1.51:3001';

// Función para realizar una solicitud HTTP y verificar la respuesta
function testConnection(url, isHttps = true) {
  console.log(`Intentando conectar a: ${url}`);
  
  const protocol = isHttps ? https : http;
  
  return new Promise((resolve, reject) => {
    const req = protocol.get(url, (res) => {
      let data = '';
      
      // Log del código de estado
      console.log(`Estado de respuesta: ${res.statusCode}`);
      console.log(`Cabeceras: ${JSON.stringify(res.headers)}`);
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        console.log('Respuesta completa:');
        try {
          // Intentar analizar como JSON
          const parsedData = JSON.parse(data);
          console.log(JSON.stringify(parsedData, null, 2));
        } catch (e) {
          // Si no es JSON, mostrar como texto
          console.log(data.substr(0, 500) + (data.length > 500 ? '...' : ''));
        }
        resolve(true);
      });
    });
    
    req.on('error', (error) => {
      console.error(`Error al conectar: ${error.message}`);
      reject(error);
    });
    
    // Establecer tiempo de espera de 10 segundos
    req.setTimeout(10000, () => {
      req.destroy();
      console.error('Tiempo de espera agotado');
      reject(new Error('Timeout'));
    });
  });
}

// Ejecutar pruebas
async function runTests() {
  console.log('=== PRUEBA DE CONEXIÓN A STREAMINGPRO ===');
  
  try {
    console.log('\n[1] Probando conexión a StreamingPro (servidor de producción)');
    await testConnection(URL_TO_TEST);
  } catch (error) {
    console.log(`No se pudo conectar al servidor de producción: ${error.message}`);
  }
  
  try {
    console.log('\n[2] Probando conexión a servidor local');
    await testConnection(LOCAL_URL, false);
  } catch (error) {
    console.log(`No se pudo conectar al servidor local: ${error.message}`);
  }
  
  console.log('\n=== PRUEBA FINALIZADA ===');
}

// Ejecutar todas las pruebas
runTests().catch(err => {
  console.error('Error en las pruebas:', err);
}); 