<script>
$.get("https://v1.hitokoto.cn?c=j",function(data,status){i(status=='success'){$('#poem').html(data.hitokoto);if(datafrom_who!=null){$('#info').html(data.from_who+" · "+"《 "+data.from+" 》");}else{$('#info').html(" “ "+data.from+" ” ";}}else{$('#poem').html("获取出错啦");}});
</script>