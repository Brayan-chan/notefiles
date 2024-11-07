<script src="<?php echo BASE_URL . 'Assets/js/pdf.js'; ?>"></script>
<script src="<?php echo BASE_URL . 'Assets/js/word.js'; ?>"></script>
<script src="<?php echo BASE_URL . 'Assets/js/carga.js'; ?>"></script>
<script src="<?php echo BASE_URL . 'Assets/js/interact.js'; ?>"></script>
<script src="<?php echo BASE_URL . 'Assets/js/pagination.js'; ?>"></script>
<script src="<?php echo BASE_URL . 'Assets/js/saveUpload.js'; ?>"></script>
<script src="<?php echo BASE_URL . 'Assets/js/pages/animaciones.js'; ?>"></script>
<script src="<?php echo BASE_URL . 'Assets/plugins/jquery/jquery-3.5.1.min.js'; ?>"></script>
<script src="<?php echo BASE_URL . 'Assets/plugins/bootstrap/js/popper.min.js'; ?>"></script>
<script src="<?php echo BASE_URL . 'Assets/plugins/bootstrap/js/bootstrap.min.js'; ?>"></script>
<script src="<?php echo BASE_URL . 'Assets/plugins/perfectscroll/perfect-scrollbar.min.js'; ?>"></script>
<script src="<?php echo BASE_URL . 'Assets/plugins/pace/pace.min.js'; ?>"></script>
<script src="<?php echo BASE_URL . 'Assets/plugins/highlight/highlight.pack.js'; ?>"></script>
<script src="<?php echo BASE_URL . 'Assets/plugins/fullcalendar/lib/main.min.js'; ?>"></script>
<script src="<?php echo BASE_URL . 'Assets/plugins/apexcharts/apexcharts.min.js'; ?>"></script>
<script src="<?php echo BASE_URL . 'Assets/js/main.min.js'; ?>"></script>
<script src="<?php echo BASE_URL . 'Assets/js/sweetalert2@11.js'; ?>"></script>
<script src="<?php echo BASE_URL . 'Assets/js/pages/calendar.js'; ?>"></script>
<script type="text/javascript" src="<?php echo BASE_URL . 'Assets/plugins/DataTables/datatables.min.js'; ?>"></script>
<script src="<?php echo BASE_URL . 'Assets/js/custom.js'; ?>"></script>
<script src="<?php echo BASE_URL . 'Assets/js/saveUpload.js'; ?>"></script>
<script src="<?php echo BASE_URL . 'Assets/js/vanilla-tilt.js'; ?>"></script>

<script>
    const base_url = '<?php echo BASE_URL; ?>';
</script>
<!-- Verificar si existe el archivo asistencias.js -->
<?php if (!empty($data['script'])) { ?>
    <script src="<?php echo BASE_URL . 'Assets/js/pages/' . $data['script']; ?>"></script>
<?php } ?>
</body>

</html>