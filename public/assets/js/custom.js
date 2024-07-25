jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 1200) {
      $('.display-on-big-screen').remove();
    } else {
      $('.display-on-small-screen').remove();
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});

function submitAction(formId, action) {
	$('#' + formId).attr('action', action).submit();
}

function submitCategory(formId, action, category) {
	$("#selectedCategory").val(category);
	$("#currentPage").val(1);
    $("#selectedSorting").val("");
    $("#selectedTag").val(null);
    $("#searchText").val("");
	submitAction(formId, action);
}

function submitPagination(formId, action, currentPage) {
	$("#currentPage").val(currentPage);
	submitAction(formId, action);
}

function submitSorting(formId, action) {
	$("#currentPage").val(1);
	submitAction(formId, action);
}

function submitClickTag(formId, action, selectedTag) {
	$("#selectedTag").val(selectedTag);
	$("#currentPage").val(1);
	$("#selectedSorting").val("");
	$("#searchText").val("");
	submitAction(formId, action);
}

function submitUnclickTag(formId, action) {
	$("#selectedTag").val("");
	$("#currentPage").val(1);
	$("#selectedSorting").val("");
	$("#searchText").val("");
	submitAction(formId, action);
}

function submitSearchInput(formId, action) {
	if(event.key !== 'Enter') {
        return;        
    }	
	submitSearch(formId, action);	
}

function submitSearchIcon(formId, action) {		
	submitSearch(formId, action);	
}

function submitClearSearchIcon(formId, action) {
	$("#searchText").val("");
	submitSearch(formId, action);	
}

function submitSearch(formId, action) {    
    $("#currentPage").val(1);
    $("#selectedSorting").val("");
    $("#selectedTag").val(null);
    submitAction(formId, action);
}

function submitArticle(formId, action, selectedArticle) {
	$("#selectedArticle").val(selectedArticle);
	submitAction(formId, action);
}

function showAnswers(showAnswers) {
	if(showAnswers) {
		$("#linkShowAnswers").hide();
		$("#linkHideAnswers").show();		
		$("#answers").show();
	} else {
		$("#linkShowAnswers").show();
		$("#linkHideAnswers").hide();		
		$("#answers").hide();
	}
}