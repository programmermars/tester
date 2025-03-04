document.getElementById('fetchBtn').onclick = async () => {
  try {
    const res = await fetch('https://jiayou.deno.dev/');
    const data = await res.text();
    document.getElementById('result').textContent = data;
  } catch (error) {
    document.getElementById('result').textContent = '❌ 获取数据失败';
  }
};
