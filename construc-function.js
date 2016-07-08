<script>
           function abc(name){
           
                this.name = name;
                return this;
           }

           var sharad = new abc('sharad');
           console.log(sharad.name);
           
           var jyotsna = new abc('jyotsna');
           console.log(jyotsna.name);
           
           console.log(sharad.name); 
</script>
