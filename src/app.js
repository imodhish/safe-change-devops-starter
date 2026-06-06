export function health() {
  return {
    status: 'ok',
    service: 'safe-change-demo'
  };
}

export function route(method, url) {
  if (method === 'GET' && url === '/health') {
    return {
      statusCode: 200,
      body: health()
    };
  }

  return {
    statusCode: 404,
    body: {
      error: 'not_found'
    }
  };
}
