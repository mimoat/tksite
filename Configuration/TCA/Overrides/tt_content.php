<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

//hide Thumbnails in List
$GLOBALS['TCA']['tt_content']['ctrl']['thumbnail'] = '';
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['default'] = 'textmedia';
