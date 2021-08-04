$obj = @{ num = 1  };

function n() { Write-Host "now : $($obj.num.ToString('000'))" -ForegroundColor Blue ;  $obj.num = $obj.num+1; mkdir $obj.num.ToString('000'); Move-Item *.png,*.json,*.log -Destination $obj.num.ToString('000'); ls $obj.num.ToString('000');  Write-Host "next: $($obj.num.ToString('000'))" -ForegroundColor Green;}

function reset() { Write-Host "now : $($obj.num.ToString('000'))" -ForegroundColor Blue ;  $obj.num = 1;  Write-Host "next: $($obj.num.ToString('000'))" -ForegroundColor Green;}

function del-current { ls *.png,*.json,*.log; rm *.png,*.json,*.log; }


