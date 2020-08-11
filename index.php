<?php
ob_start();
session_start();

if (!isset($_SESSION["login"])) {
    header("Location:LoginPage.php");
}
ob_end_flush();
?>
<?php
include("Common/DashBoardCards.php");
include('Shared/_Layout_Top.php');
?>

<!-- Datatables -->

<!-- Styles -->

<link href="Content/CustomReport/css/jquery.dataTables.min.css" rel="stylesheet">
<link href="Content/CustomReport/css/searchPanes.dataTables.min.css" rel="stylesheet">
<link href="Content/CustomReport/css/select.dataTables.min.css" rel="stylesheet">
<link href="Content/CustomReport/css/buttons.dataTables.min.css" rel="stylesheet">
<link href="Content/CustomReport/css/responsive.dataTables.min.css" rel="stylesheet">

<!-- JavaScripts -->

<script src="Content/CustomReport/js/jquery.dataTables.min.js"></script>
<script src="Content/CustomReport/js/dataTables.searchPanes.min.js"></script>
<script src="Content/CustomReport/js/dataTables.select.min.js"></script>
<script src="Content/CustomReport/js/dataTables.buttons.min.js"></script>
<script src="Content/CustomReport/js/dataTables.responsive.min.js"></script>

<div class="x_panel">
    <div class="x_title">
        <h2> <i class="fa fa-home"></i> General </h2>
        <ul class="nav navbar-right panel_toolbox">
            <li>
                <a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
            </li>
        </ul>
        <div class="clearfix"></div>
    </div>
    <div class="x_content">

        <div class="row">

            <div class="col-lg-3 col-md-3 col-sm-6">
                <div class="tile-stats border-info" style="border-width:2px; height: 120px;">
                    <div class="ml-2 text-center">

                        <h2 class="font-weight-bold align-content-center">
                            <i class="fa fa-hdd-o fa-1x"></i>
                            Disk Usage Rate
                        </h2>
                    </div>

                    <div class="ml-2 text-center pr-3">
                        <h4 class="font-weight-bolder"> <?php getDiskUsageRate() ?> Used </h4>
                        <div class="progress">
                            <div class="progress-bar bg-blue-sky" role="progressbar" style="width: <?php getDiskUsageRate(); ?>" aria-valuenow="<?php getDiskUsageRate() ?>" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-lg-4 col-md-12 col-sm-12">
                <div id="cpuChart" style="width:100%;height:300px;"></div>
            </div>




            <div class="col-lg-4 col-md-12 col-sm-12">
                <div id="memoryChart" style="height:300px;"></div>
            </div>

        </div>
    </div>
</div>
<div class="x_panel">
    <div class="x_title">
        <h2> <i class="fa fa-home"></i> Paths To Be Cleaned </h2>
        <ul class="nav navbar-right panel_toolbox">
            <li>
                <a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
            </li>
        </ul>
        <div class="clearfix"></div>
    </div>
    <div class="x_content">

        <div class="row">
            <form action="Common/pathForm.php" method="GET">
                <table>
                    <tr>
                        <td><input type="text" class="form-control" name="pathName" autocomplete="off" /></td>
                        <td><button type="submit" class="btn btn-primary">Add</button></td>
                    </tr>
                </table>

            </form>

            <table id="datatable-buttons" class="table table-striped table-bordered" style="width:100%">
                <thead>
                    <tr>
                        <th>

                            Folder Path
                        </th>
                        <th>
                            #
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <?php

                    $str_data = file_get_contents("Common/folderpaths.json");
                    $data = json_decode($str_data, true);
                    foreach ($data["paths"] as $key => $value) {
                        echo "<tr><td>" . $value . "</td><td><a href='Common/pathForm.php?pathId=" . $key . "&pathName=" . $value . "&type=delete' class='btn btn-danger'>Delete</a></td></tr>";
                    }
                    ?>
                </tbody>
            </table>

        </div>
    </div>
</div>



<!-- ECharts -->
<script src="Content/vendors/echarts/dist/echarts.min.js"></script>
<script src="Content/vendors/echarts/map/js/world.js"></script>
<script src="Content/js/MyJs/GetPerformanceDetails.js"></script>






<?php
include('Shared/_Layout_Down.php');
?>