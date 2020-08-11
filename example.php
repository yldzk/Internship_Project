

<?php




session_start();

if (!isset($_SESSION["login"])) {
    header("Location:LoginPage.php");
}
?>
<?php
include("Common/DashBoardCards.php");
include('Shared/_Layout_Top.php');
?>

<div class="">



    <div class="page-title">
        <div class="title_left">
            <h3>User Operations</h3>
        </div>
    </div>
    <div class="clearfix"></div>
    <div class="row">

       <?php getCpuUsageRate();?>
       <?php getMemoryUsageRate();?>
       <?php getDiskUsageRate();?>


    </div>


</div>



<?php
include('Shared/_DataTableFiles.php');
?>

<?php
include('Shared/_Layout_Down.php');
?>