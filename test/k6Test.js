/* eslint-disable */
import http from 'k6/http';
import { sleep, check } from 'k6';
import { Counter } from 'k6/metrics';

export const requests = new Counter('http_reqs');

export const options = {
  vus: 100,
  duration: '15s',
};

const baseUrl = 'http://localhost:3000/qa/questions/?product_id=';

var randomNum = function(min = 900000, max = 1000000) {
  var difference = max - min,
      randomNum = Math.random();
  return randomNum !== 1 ? Math.floor((difference + 1) * randomNum) + min : min + difference;
}

export default function() {
  const url = `${baseUrl}${randomNum()}`;
  const res = http.get(url);
  sleep(1);
  check(res, {
    'is status 200': r => r.status === 200,
    'transaction time < 200ms': r => r.timings.duration < 200,
    'transaction time < 500ms': r => r.timings.duration < 500,
    'transaction time < 1000ms': r => r.timings.duration < 1000,
    'transaction time < 2000ms': r => r.timings.duration < 2000,
  })
}

// added comment